import "./globals.css";
import Nav from "@/app/components/Nav";
import { inter, lobster, roboto, roboto_mono } from "@/app/fonts";

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
      className={`${lobster.variable} ${roboto.variable} ${roboto_mono.variable} ${inter.variable}`}
    >
      <body>
        <Nav>{children}</Nav>
      </body>
    </html>
  );
}
