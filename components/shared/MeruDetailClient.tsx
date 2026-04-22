"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import BookingModal from "@/components/shared/BookingModal";
import { TripPackage } from "@/lib/types";
import { Clock, Mountain, Tent, Check, Info, CalendarDays, MapPin, Sunrise } from "lucide-react";

interface MeruDetailClientProps {
  route: TripPackage;
}

export default function MeruDetailClient({ route }: MeruDetailClientProps) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Summary Cards */}
            <AnimatedSection>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: Clock, label: "Duration", value: route.summary?.length || "N/A" },
                  { icon: Tent, label: "Type", value: route.summary?.type || "N/A" },
                  { icon: Mountain, label: "Difficulty", value: route.summary?.difficulty || "N/A" },
                  { icon: Sunrise, label: "Peak", value: "4,566m" },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <item.icon size={20} className="mx-auto text-brand-green mb-2" />
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm font-bold text-gray-900 mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Description */}
            {route.description && (
              <AnimatedSection className="mb-10">
                <p className="text-gray-600 leading-relaxed text-base">{route.description}</p>
              </AnimatedSection>
            )}

            {/* Itinerary */}
            {route.itinerary && route.itinerary.length > 0 && (
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CalendarDays size={24} className="text-brand-green" />
                  Day-by-Day Itinerary
                </h2>

                <div className="space-y-4">
                  {route.itinerary.map((day, i) => (
                    <motion.div
                      key={`${day.day}-${i}`}
                      initial={false}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveDay(activeDay === i ? -1 : i)}
                        className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                      >
                        <span className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center text-sm font-bold shrink-0">
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 text-sm sm:text-base">{day.title}</p>
                          <div className="flex flex-wrap gap-3 mt-1">
                            {day.trekkingTime && (
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock size={12} /> {day.trekkingTime}
                              </span>
                            )}
                            {day.climaticZone && (
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Mountain size={12} /> {day.climaticZone}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                      <div className={`p-4 ${activeDay === i ? "block" : "hidden sm:block"}`}>
                        <p className="text-sm text-gray-600 leading-relaxed">{day.description}</p>
                        {day.altitudeGained && (
                          <p className="text-xs text-brand-green font-medium mt-2">
                            Altitude: {day.altitudeGained}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Inclusions */}
            {route.inclusions && route.inclusions.length > 0 && (
              <AnimatedSection className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Check size={24} className="text-brand-green" />
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {route.inclusions.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                      <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Notes */}
            {route.notes && route.notes.length > 0 && (
              <AnimatedSection className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Info size={24} className="text-brand-gold" />
                  Important Notes
                </h2>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 space-y-3">
                  {route.notes.map((note, i) => (
                    <p key={i} className="text-sm text-amber-800 flex items-start gap-2">
                      <Info size={14} className="mt-0.5 shrink-0" />
                      {note}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <AnimatedSection>
                <div className="bg-brand-green rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Ready to Book?</h3>
                  <p className="text-sm text-white/80 mb-6">
                    Reserve your spot on the {route.title} and experience Tanzania&apos;s second highest peak.
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

              <AnimatedSection delay={0.1}>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Why Choose Us</h4>
                  <ul className="space-y-3">
                    {[
                      "Experienced certified guides",
                      "Armed ranger included",
                      "Quality hut accommodation",
                      "All meals provided",
                      "Park fees handled",
                      "Pre-climb briefing",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-brand-green shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        tripName={route.title}
      />
    </section>
  );
}
