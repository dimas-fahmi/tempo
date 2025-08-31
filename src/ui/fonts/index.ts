import { Geist, Geist_Mono, Audiowide } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const audioWide = Audiowide({
  variable: "--font-audioWide",
  subsets: ["latin"],
  weight: ["400"],
});
