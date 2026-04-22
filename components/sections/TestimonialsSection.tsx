"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { testimonials } from "@/lib/data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / visible);
  const next = () => setCurrent((prev) => (prev + 1) % totalPages);
  const prev = () => setCurrent((prev) => (prev - 1 + totalPages) % totalPages);

  const displayed = testimonials.slice(current * visible, current * visible + visible);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-brand-slate/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            What Our <span className="text-brand-green">Clients Say</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <AnimatePresence mode="wait">
              {displayed.map((t) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg relative"
                >
                  <Quote size={28} className="text-brand-gold/40 mb-3 sm:mb-4" />
                  <p className="text-gray-600 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.location}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial page ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-brand-green" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
