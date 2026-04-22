"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ArrowRight, Mountain, Clock, BarChart3 } from "lucide-react";

const routes = [
  {
    slug: "/kilimanjaro",
    routeSlug: "kilimanjaro---marangu-route",
    title: "Marangu Route",
    subtitle: "The Coca-Cola Route",
    description:
      "The oldest and most established path on Kilimanjaro. It is the only route offering comfortable hut accommodation, making it a favorite for those who prefer not to camp.",
    image: "/Kilimanjaro images/horombo-hut.jpg",
    days: "5-6 Days",
    difficulty: "Moderate",
    altitude: "5,895m",
  },
  {
    slug: "/kilimanjaro",
    routeSlug: "kilimanjaro---machame-route",
    title: "Machame Route",
    subtitle: "The Whiskey Route",
    description:
      "The most popular and scenic path on Kilimanjaro. Dramatic landscapes, challenging terrain, and excellent acclimatization with its climb-high-sleep-low profile.",
    image: "/Kilimanjaro images/machame-hut-camps.jpg",
    days: "6-7 Days",
    difficulty: "Challenging",
    altitude: "5,895m",
  },
  {
    slug: "/kilimanjaro",
    routeSlug: "kilimanjaro---rongai-route-6-7-day",
    title: "Rongai Route",
    subtitle: "The Northern Approach",
    description:
      "The only trail approaching from the north near the Kenyan border. Offers a unique wilderness experience with fewer crowds, drier conditions, and wildlife encounters.",
    image: "/Kilimanjaro images/simba-camp.jpg",
    days: "6-7 Days",
    difficulty: "Moderate",
    altitude: "5,895m",
  },
];

export default function KilimanjaroHighlightsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Kilimanjaro Routes
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Climb Africa&apos;s <span className="text-brand-green">Highest Peak</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Choose from our most popular routes to the Roof of Africa. Each offers a unique experience with expert guides and full support.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {routes.map((route, i) => (
            <AnimatedSection key={route.routeSlug} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={route.image}
                    alt={route.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-brand-gold text-brand-green text-xs font-bold px-3 py-1 rounded-full">
                    {route.altitude}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Mountain size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <p className="text-xs font-bold text-brand-green uppercase tracking-wider mb-1">
                    {route.subtitle}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{route.title}</h3>

                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} className="text-brand-green" />
                      {route.days}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <BarChart3 size={12} className="text-brand-green" />
                      {route.difficulty}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
                    {route.description}
                  </p>

                  <Link
                    href={`${route.slug}#${route.routeSlug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-light transition-colors group/link"
                  >
                    Explore Route
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8 sm:mt-10">
          <Link
            href="/kilimanjaro"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-light transition-colors shadow-lg text-sm sm:text-base"
          >
            View All 6 Routes
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
