import type { Metadata } from "next";
import localFont from "next/font/local";
import { League_Spartan, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

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

const siteUrl = "https://p19avenue.com";
const siteName = "P19 Avenue - The Neighborhood Mall";
const defaultDescription =
  "P19 Avenue — คอมมูนิตี้มอลล์บนถนนพุทธบูชา The Neighborhood Mall ที่รวมร้านค้าและบริการไว้ในที่เดียว";
const businessNameTH = "บริษัท เบทเทอร์แลนด์ ดีเวลลอปเมนท์ จำกัด";
const businessNameEN = "BETTERLAND DEVELOPMENT CO., LTD.";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | P19 Avenue`,
  },
  description: defaultDescription,
  icons: [{ rel: "icon", url: "/favicon-p19.png" }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName,
    title: siteName,
    description: defaultDescription,
    url: siteUrl,
    images: [
      {
        url: "/image/logo-p19.png",
        width: 1200,
        height: 630,
        alt: "P19 Avenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: ["/image/logo-p19.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "P19 Avenue",
    "พุทธบูชา",
    "คอมมูนิตี้มอลล์",
    "The Neighborhood Mall",
    "ร้านค้าพุทธบูชา",
    "Cafe Amazon",
    "Li Hua",
    "Beyond",
    "Velaa",
    "Chaanin",
    "Curf Studio",
    "พระราม 2",
    "บางมด",
    "จอมทอง",
  ],
  other: {
    "geo.region": "TH-10",
    "geo.placename": "Bangkok",
    "geo.position": "13.6675;100.4667",
    "ICBM": "13.6675, 100.4667",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ShoppingCenter",
  name: "P19 Avenue",
  alternateName: "P19 Avenue Putthabucha",
  description: defaultDescription,
  url: siteUrl,
  telephone: "+66847748475",
  email: "info.p19avenue@gmail.com",
  founder: {
    "@type": "Organization",
    name: businessNameEN,
    alternateName: businessNameTH,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "351/1 ถนนพุทธบูชา",
    addressLocality: "แขวงบางมด เขตจอมทอง",
    addressRegion: "กรุงเทพมหานคร",
    postalCode: "10150",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.6675,
    longitude: 100.4667,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "06:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "06:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "06:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "06:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "06:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "06:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "06:00", closes: "22:00" },
  ],
  image: `${siteUrl}/image/logo-p19.png`,
  sameAs: [
    "https://www.facebook.com/p19avenue",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: businessNameEN,
  alternateName: businessNameTH,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "351/1 ถนนพุทธบูชา",
    addressLocality: "แขวงบางมด เขตจอมทอง",
    addressRegion: "กรุงเทพมหานคร",
    postalCode: "10150",
    addressCountry: "TH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={cn("h-full", "antialiased", leagueSpartan.variable, notoSansThai.variable, buffalo.variable, "font-sans")}
    >
      <head>
        <meta name="theme-color" content="#687369" />
        <link rel="apple-touch-icon" href="/favicon-p19.png" />
      </head>
      <body className="min-h-full flex flex-col">
        {/* JSON-LD Schema Markup */}
        <Script
          id="schema-shopping-center"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
          strategy="beforeInteractive"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}