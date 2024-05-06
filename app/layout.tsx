import "./globals.css";
import { mohave, quicksand } from "@/app/fonts";
import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_PAGE } from "@/graphql/queries/page";
import { Analytics } from "@vercel/analytics/react"
// COMPONENTS
import NavDrawer from "@/app/components/Marginals/Nav/NavDrawer";
import Footer from "@/app/components/Marginals/Footer";
import Hero from "@/app/components/Heroes/Hero";
// TYPES
import { PageSearchResultType } from "@/types/strapi/pageSearchResultType";

export const metadata = {
  title: "Cam's Personal Site",
  description: "A peek into my life",
};

export const revalidate = 60;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the home page from Strapi
  const client = getClient();
  const res: PageSearchResultType = await client.query({
    query: GET_PAGE,
    variables: { slug: "home" },
  });
  const contactHero = res.data.pages.data[0].attributes.heroes.data.find(
    (hero) => hero.attributes.slug === "contact"
  )!.attributes;

  return (
    <html
      lang="en"
      className={`
      ${mohave.variable} ${quicksand.variable}
      ${quicksand.className}
      `}
    >
      <body>
        <NavDrawer>
          {children}
          {/* Contact Me Hero */}
          <Hero
            title={contactHero.title}
            description={contactHero.description}
            button={contactHero.button.data}
            background={"bg-secondary"}
          />
          <Footer />
        </NavDrawer>
        <Analytics />
      </body>
    </html>
  );
}
