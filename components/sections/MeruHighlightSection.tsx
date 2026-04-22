"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ArrowRight, Sunrise, Mountain, MapPin } from "lucide-react";

export default function MeruHighlightSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-slate">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/meru-images/meru-hero.jpg"
              alt="Mount Meru at sunrise"
              fill
              className="object-cover opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-slate via-brand-slate/90 to-brand-slate/60" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-16">
            <div>
              <AnimatedSection>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  <Sunrise size={14} />
                  Tanzania&apos;s Second Highest Peak
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                  Conquer <span className="text-brand-gold">Mount Meru</span>
                </h2>
                <p className="text-white/80 leading-relaxed mb-6 text-sm sm:text-base">
                  Standing at <strong className="text-white">4,566 meters</strong>, Mount Meru is the perfect warm-up for Kilimanjaro — or a stunning summit trek in its own right. Trek through Arusha National Park with wildlife encounters, dramatic crater views, and unforgettable sunrises from Socialist Peak.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  <div className="flex items-center gap-2 text-white/90">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mountain size={16} className="text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">4,566m</div>
                      <div className="text-[10px] text-white/60">Summit</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">2-3 Days</div>
                      <div className="text-[10px] text-white/60">Duration</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 col-span-2 sm:col-span-1">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Sunrise size={16} className="text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Arusha NP</div>
                      <div className="text-[10px] text-white/60">Location</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/meru"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-brand-green font-bold rounded-xl hover:bg-brand-gold-dark transition-colors shadow-lg text-sm sm:text-base"
                  >
                    View Treks
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/255755873991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all text-sm sm:text-base"
                  >
                    Ask About Meru
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.15} className="hidden lg:block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/meru-images/meru-panorama.jpg"
                  alt="Mount Meru panoramic view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
