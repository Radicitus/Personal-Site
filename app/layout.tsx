import "./globals.css";
import Nav from "@/app/components/Nav";
import { mohave, quicksand } from "@/app/fonts";
import Hero from "@/app/components/Hero";

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
        <Nav />
        <Hero />
        {children}
      </body>
    </html>
  );
}
