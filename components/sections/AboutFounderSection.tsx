"use client";

import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Mountain, MapPin, Clock } from "lucide-react";

export default function AboutFounderSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Meet the Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Remid <span className="text-brand-green">Mmasy</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-gray-600 leading-relaxed mb-4">
                With over <strong>20 years of experience</strong> guiding climbers to the summits of Mount Kilimanjaro, Mount Meru, and other peaks across East Africa, Remid Mmasy is one of Tanzania&apos;s most respected mountain guides.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                His deep knowledge of the mountains, commitment to climber safety, and warm hospitality have made him a favorite among adventurers from around the world. Under his leadership, Meru2Kili has grown into a trusted name for Kilimanjaro climbs, Meru ascents, and Northern Circuit safaris.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <Clock size={18} className="text-brand-green" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">20+</div>
                    <div className="text-xs text-gray-500">Years</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <Mountain size={18} className="text-brand-green" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">500+</div>
                    <div className="text-xs text-gray-500">Summits</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <MapPin size={18} className="text-brand-green" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-500">Dedication</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <Image
                  src="/About Founder.jpeg"
                  alt="Remid Mmasy - Founder of Meru2Kili"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-xl shadow-lg">
                <p className="text-sm font-bold text-brand-green">Remid Mmasy</p>
                <p className="text-xs text-gray-500">Founder & Lead Guide</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
