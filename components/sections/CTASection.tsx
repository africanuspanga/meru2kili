"use client";

import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Ready for Your <span className="text-brand-gold">Adventure?</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Whether you dream of standing on the Roof of Africa or witnessing the Big Five on safari, we are here to make it happen.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-green font-bold rounded-xl hover:bg-brand-gold-dark transition-all shadow-lg"
            >
              Start Planning
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/255755873991"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
            <a href="tel:+255787873991" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <Phone size={16} />
              +255 787 873 991
            </a>
            <a href="mailto:remidmmasy@gmail.com" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <Mail size={16} />
              remidmmasy@gmail.com
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
