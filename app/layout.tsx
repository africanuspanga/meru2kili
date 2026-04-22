import type { Metadata } from "next";
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
  title: "Meru2Kili Hiking & Safaris | Conquer Africa's Highest Peaks",
  description:
    "Expert-guided climbs of Mount Kilimanjaro and Mount Meru, plus unforgettable Tanzania safaris and day trips. 20+ years of experience with Remid Mmasy.",
  keywords: [
    "Kilimanjaro climb",
    "Mount Meru",
    "Tanzania safari",
    "Kilimanjaro routes",
    "Arusha day trips",
    "Remid Mmasy",
    "Meru2Kili",
  ],
  openGraph: {
    title: "Meru2Kili Hiking & Safaris",
    description:
      "Expert-guided climbs of Mount Kilimanjaro and Mount Meru, plus unforgettable Tanzania safaris.",
    type: "website",
  },
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
