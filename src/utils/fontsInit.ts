import { Geist, Inter, Roboto, Bebas_Neue } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas_neue",
});
