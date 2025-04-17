import type { Metadata } from "next";
import "./../globals.css";
import Navbar from "@/components/Navbar";
import { bebas_neue, geistSans, roboto } from "@/utils/fontsInit";

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
        <div className="mt-[80px] pb-20">{children}</div>
      </body>
    </html>
  );
}
