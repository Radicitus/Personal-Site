import "./globals.css";
import { mohave, quicksand } from "@/app/fonts";
import NavDrawer from "@/app/components/Nav/NavDrawer";

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
        <NavDrawer>{children}</NavDrawer>
      </body>
    </html>
  );
}
