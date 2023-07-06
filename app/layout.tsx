import "./globals.css";
import { mohave, quicksand } from "@/app/fonts";
import NavDrawer from "@/app/components/Marginals/Nav/NavDrawer";
import Footer from "@/app/components/Marginals/Footer";
import ReduxProvider from "@/redux/provider";

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
    <ReduxProvider>
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
            <Footer />
          </NavDrawer>
        </body>
      </html>
    </ReduxProvider>
  );
}
