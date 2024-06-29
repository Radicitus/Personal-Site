import "./globals.css";
import { mohave, quicksand, fontSans } from "@/app/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// COMPONENTS
import Footer from "@/app/components/Marginals/Footer";
import NavContainer from "@/app/components/Marginals/Nav/NavContainer";

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
  return (
    <html
      lang="en"
      className={`
      ${mohave.variable} ${quicksand.variable}
      ${quicksand.className} ${fontSans.className} ${fontSans.variable}
      `}
    >
      <body>
        <NavContainer />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
