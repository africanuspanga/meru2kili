"use client";

import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import BookingModal from "@/components/shared/BookingModal";
import { TripPackage } from "@/lib/types";
import { Check, X, Clock, MapPin, Users, Binoculars } from "lucide-react";

interface SafariDetailClientProps {
  pkg: TripPackage;
}

export default function SafariDetailClient({ pkg }: SafariDetailClientProps) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: Clock, label: "Duration", value: "Multi-day" },
                  { icon: MapPin, label: "Region", value: "Northern Circuit" },
                  { icon: Users, label: "Group Size", value: "Flexible" },
                  { icon: Binoculars, label: "Focus", value: "Big 5 & More" },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <item.icon size={20} className="mx-auto text-brand-green mb-2" />
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm font-bold text-gray-900 mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Itinerary Overview</h2>
              <div className="bg-gray-50 rounded-xl p-6 whitespace-pre-line text-sm text-gray-600 leading-relaxed">
                {pkg.description}
              </div>
            </AnimatedSection>

            {pkg.inclusions && pkg.inclusions.length > 0 && (
              <AnimatedSection className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Check size={24} className="text-brand-green" />
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.inclusions.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                      <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {pkg.exclusions && pkg.exclusions.length > 0 && (
              <AnimatedSection className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <X size={24} className="text-red-400" />
                  Not Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.exclusions.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                      <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <AnimatedSection>
                <div className="bg-brand-green rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Book This Safari</h3>
                  <p className="text-sm text-white/80 mb-6">
                    Secure your spot on this incredible Northern Circuit safari adventure.
                  </p>
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="w-full py-3 bg-brand-gold text-brand-green font-bold rounded-xl hover:bg-brand-gold-dark transition-colors"
                  >
                    Book Now
                  </button>
                  <a
                    href="https://wa.me/255755873991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block w-full py-3 text-center bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        tripName={pkg.title}
      />
    </section>
  );
}
