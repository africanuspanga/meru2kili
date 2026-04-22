"use client";

import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function RecommendedBySection() {
  const logos = [
    { src: "/recommeded by section logos to use/TripAdvisor_Logo.svg.png", alt: "TripAdvisor", width: 140 },
    { src: "/recommeded by section logos to use/google-reviews-logo.png", alt: "Google Reviews", width: 130 },
    { src: "/recommeded by section logos to use/trust-pilot-stacked-black.svg", alt: "Trustpilot", width: 120 },
    { src: "/recommeded by section logos to use/TANAPA.jpg", alt: "TANAPA", width: 100 },
    { src: "/recommeded by section logos to use/TTB.png", alt: "Tanzania Tourist Board", width: 100 },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Recommended & Trusted By
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <AnimatedSection key={logo.alt} delay={i * 0.1}>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={40}
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
