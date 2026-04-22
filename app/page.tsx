import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import AboutFounderSection from "@/components/sections/AboutFounderSection";
import RecommendedBySection from "@/components/sections/RecommendedBySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <AboutFounderSection />
      <RecommendedBySection />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
    </>
  );
}
