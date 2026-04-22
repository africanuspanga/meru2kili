"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ArrowRight, Mountain, Sunrise, Binoculars } from "lucide-react";

const highlights = [
  {
    slug: "/kilimanjaro",
    title: "Mount Kilimanjaro",
    subtitle: "6 Iconic Routes",
    description:
      "Climb Africa's highest peak at 5,895m. Choose from Machame, Marangu, Lemosho, Rongai, and Umbwe routes with expert guides and full support.",
    image: "/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg",
    icon: Mountain,
    cta: "Explore Routes",
    badge: "5,895m",
  },
  {
    slug: "/meru",
    title: "Mount Meru",
    subtitle: "2 & 3 Day Treks",
    description:
      "Tanzania's second highest peak at 4,566m. A stunning warm-up for Kilimanjaro with wildlife encounters inside Arusha National Park.",
    image: "/meru-images/meru-hero.jpg",
    icon: Sunrise,
    cta: "View Treks",
    badge: "4,566m",
  },
  {
    slug: "/safaris",
    title: "Tanzania Safaris",
    subtitle: "Northern Circuit",
    description:
      "Witness the Big Five in Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara with our experienced safari guides.",
    image: "/safari-images/rhino-ngorongoro.jpg",
    icon: Binoculars,
    cta: "See Packages",
    badge: "Big 5",
  },
];

export default function HighlightCardsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Our Adventures
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Explore <span className="text-brand-green">Tanzania</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From the Roof of Africa to the endless savannahs, we craft unforgettable adventures for every kind of traveler.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.slug} delay={i * 0.15}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-brand-gold text-brand-green text-xs font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <item.icon size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs font-bold text-brand-green uppercase tracking-wider mb-1">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  <Link
                    href={item.slug}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-light transition-colors group/link"
                  >
                    {item.cta}
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
