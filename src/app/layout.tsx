import type { Metadata } from "next";
import { Geist, Inter, Roboto, Bebas_Neue } from "next/font/google";
import "./../globals.css";
import Navbar from "@/components/Navbar";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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

export const metadata: Metadata = {
  title: "Next Posts App",
  description: "A Simple Next.js Posts App to add and view Posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${bebas_neue.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
