"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";

export default function RecommendedBySection() {
  const logos = [
    { src: "/recommeded by section logos to use/TripAdvisor_Logo.svg.png", alt: "TripAdvisor" },
    { src: "/recommeded by section logos to use/google-reviews-logo.png", alt: "Google Reviews" },
    { src: "/recommeded by section logos to use/trust-pilot-stacked-black.svg", alt: "Trustpilot" },
    { src: "/recommeded by section logos to use/TANAPA.jpg", alt: "TANAPA" },
    { src: "/recommeded by section logos to use/TTB.png", alt: "Tanzania Tourist Board" },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Recommended & Trusted By
          </p>
        </AnimatedSection>

        {/* Desktop: flex wrap */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <AnimatedSection key={logo.alt} delay={i * 0.1}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: scrolling marquee */}
        <div className="sm:hidden overflow-hidden relative">
          <div className="flex gap-8 animate-scroll-x">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={`${logo.alt}-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain shrink-0 opacity-80"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
