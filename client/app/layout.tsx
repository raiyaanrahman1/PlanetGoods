import type { Metadata } from "next";
import "./globals.css";
import Nav from "./ui/nav";
import { inter } from "@/app/ui/fonts";


export const metadata: Metadata = {
  title: "PlanetGoods",
  description: "Offering goods that are kind to the planet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} antialiased h-full bg-[#E8D8C3] text-white font-sans`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
