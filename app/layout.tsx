import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Meru2Kili Hiking & Safaris | Kilimanjaro, Meru & Tanzania Safaris",
    template: "%s | Meru2Kili",
  },
  description:
    "Expert-guided climbs of Mount Kilimanjaro and Mount Meru, plus unforgettable Tanzania safaris and day trips. 20+ years of experience with Remid Mmasy. Book your adventure today.",
  keywords: [
    "Kilimanjaro climb",
    "Mount Meru",
    "Tanzania safari",
    "Kilimanjaro routes",
    "Arusha day trips",
    "Remid Mmasy",
    "Meru2Kili",
    "Kilimanjaro trekking",
    "Mount Meru climbing",
    "Northern Circuit safari",
    "Serengeti safari",
    "Ngorongoro Crater",
    "Tanzania adventure",
    "Africa highest peak",
  ],
  authors: [{ name: "Meru2Kili Hiking & Safaris" }],
  creator: "Meru2Kili Hiking & Safaris",
  publisher: "Meru2Kili Hiking & Safaris",
  metadataBase: new URL("https://www.meru2kili.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Meru2Kili Hiking & Safaris | Conquer Africa's Highest Peaks",
    description:
      "Expert-guided climbs of Mount Kilimanjaro and Mount Meru, plus unforgettable Tanzania safaris and day trips.",
    type: "website",
    url: "https://www.meru2kili.com",
    siteName: "Meru2Kili Hiking & Safaris",
    locale: "en_US",
    images: [
      {
        url: "/Meru2Kili Hero Image.png",
        width: 1200,
        height: 630,
        alt: "Mount Kilimanjaro with Meru2Kili Hiking & Safaris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meru2Kili Hiking & Safaris | Kilimanjaro, Meru & Tanzania Safaris",
    description:
      "Expert-guided climbs of Mount Kilimanjaro and Mount Meru, plus unforgettable Tanzania safaris and day trips.",
    images: ["/Meru2Kili Hero Image.png"],
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
