import "./globals.css";
import { mohave, quicksand } from "@/app/fonts";
import NavDrawer from "@/app/components/Marginals/Nav/NavDrawer";
import Footer from "@/app/components/Marginals/Footer";
import ContactMeHero from "@/app/components/Heroes/ContactMeHero";

export const metadata = {
  title: "Cam's Personal Site",
  description: "A peek into my life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <ContactMeHero />
          <Footer />
        </NavDrawer>
      </body>
    </html>
  );
}
