import type { Metadata } from "next";
import localFont from "next/font/local";
import { League_Spartan, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-sans",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "700", "900"],
  variable: "--font-thai",
});

const buffalo = localFont({
  src: "./fonts/Buffalo.otf",
  variable: "--font-buffalo",
});

export const metadata: Metadata = {
  title: "P19 Avenue - The Neighborhood Mall",
  description:
    "P19 Avenue — คอมมูนิตี้มอลล์บนถนนพุทธบูชา The Neighborhood Mall ที่รวมร้านค้าและบริการไว้ในที่เดียว",
  icons: [{ rel: "icon", url: "/favicon-p19.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", leagueSpartan.variable, notoSansThai.variable, buffalo.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
