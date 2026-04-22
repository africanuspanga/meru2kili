import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import AboutFounderSection from "@/components/sections/AboutFounderSection";
import KilimanjaroHighlightsSection from "@/components/sections/KilimanjaroHighlightsSection";
import MeruHighlightSection from "@/components/sections/MeruHighlightSection";
import SafariHighlightsSection from "@/components/sections/SafariHighlightsSection";
import DayTripsHighlightsSection from "@/components/sections/DayTripsHighlightsSection";
import RecommendedBySection from "@/components/sections/RecommendedBySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Meru2Kili Hiking & Safaris | Kilimanjaro, Meru & Tanzania Safaris",
  description:
    "Expert-guided climbs of Mount Kilimanjaro and Mount Meru, plus unforgettable Tanzania safaris and day trips. 20+ years of experience with Remid Mmasy. Book your adventure today.",
  alternates: {
    canonical: "https://www.meru2kili.com/",
  },
  openGraph: {
    title: "Meru2Kili Hiking & Safaris | Conquer Africa's Highest Peaks",
    description:
      "Expert-guided climbs of Mount Kilimanjaro and Mount Meru, plus unforgettable Tanzania safaris and day trips.",
    url: "https://www.meru2kili.com",
    type: "website",
    images: [
      {
        url: "https://www.meru2kili.com/Meru2Kili Hero Image.png",
        width: 1200,
        height: 630,
        alt: "Mount Kilimanjaro with Meru2Kili Hiking & Safaris",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <AboutFounderSection />
      <KilimanjaroHighlightsSection />
      <MeruHighlightSection />
      <SafariHighlightsSection />
      <DayTripsHighlightsSection />
      <RecommendedBySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
