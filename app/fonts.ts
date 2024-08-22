import { Mohave, Quicksand, Inter } from "next/font/google";

export const mohave = Mohave({
  subsets: ["latin"],
  variable: "--font-mohave",
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
