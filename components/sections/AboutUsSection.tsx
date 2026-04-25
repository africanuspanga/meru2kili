"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Compass, Shield, Heart, Award } from "lucide-react";

export default function AboutUsSection() {
  const values = [
    {
      icon: Compass,
      title: "Expert Guides",
      desc: "Certified, experienced guides with deep knowledge of every trail.",
    },
    {
      icon: Shield,
      title: "Safety First",
      desc: "Comprehensive safety protocols, emergency oxygen, and medical support.",
    },
    {
      icon: Heart,
      title: "Local Communities",
      desc: "We support local porters and communities through fair wages.",
    },
    {
      icon: Award,
      title: "Award Winning",
      desc: "Recognized by TripAdvisor, Google Reviews, and Trustpilot.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/About page.jpeg"
                  alt="Meru2Kili team on the mountain"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-green text-white p-6 rounded-xl shadow-xl hidden sm:block">
                <div className="text-3xl font-bold text-brand-gold">20+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Your Trusted Partner for{" "}
                <span className="text-brand-green">Tanzania Adventures</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Meru2Kili Hiking & Safaris is a premier tour company based in Arusha, Tanzania, specializing in guided climbs of Mount Kilimanjaro and Mount Meru, as well as world-class safaris across the Northern Circuit.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded by Remid Mmasy, a veteran mountain guide with over two decades of experience, we have helped hundreds of adventurers reach the Roof of Africa. Our commitment to safety, professionalism, and authentic local experiences sets us apart.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-brand-green/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
