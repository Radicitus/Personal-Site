import { Mohave, Quicksand, Inter as FontSans } from "next/font/google";

export const mohave = Mohave({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mohave",
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
