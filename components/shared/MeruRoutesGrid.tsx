"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TripPackage } from "@/lib/types";
import AnimatedSection from "./AnimatedSection";
import BookingModal from "./BookingModal";
import { Clock, Mountain, ArrowRight, Tent, CalendarCheck, Sunrise } from "lucide-react";

interface MeruRoutesGridProps {
  routes: TripPackage[];
}

export default function MeruRoutesGrid({ routes }: MeruRoutesGridProps) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState("");

  const openBooking = (tripName: string) => {
    setSelectedTrip(tripName);
    setBookingOpen(true);
  };

  const difficultyColor = (d: string) => {
    if (d.toLowerCase().includes("moderate")) return "bg-blue-100 text-blue-700";
    if (d.toLowerCase().includes("demanding")) return "bg-orange-100 text-orange-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {routes.map((route, i) => (
          <AnimatedSection key={route.slug} delay={i * 0.15}>
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={route.image || "/meru-images/meru-hero.jpg"}
                  alt={route.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColor(
                      route.summary?.difficulty || ""
                    )}`}
                  >
                    {route.summary?.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{route.title}</h3>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Clock size={14} className="text-brand-green" />
                    {route.summary?.length}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Tent size={14} className="text-brand-green" />
                    {route.summary?.type}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Sunrise size={14} className="text-brand-green" />
                    4,566m
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-6 line-clamp-3 flex-1">
                  {route.description ||
                    "Experience an unforgettable trek through Arusha National Park with stunning wildlife and scenery."}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => openBooking(route.title)}
                    className="inline-flex items-center justify-center gap-2 py-3 bg-brand-gold text-brand-green font-semibold rounded-xl hover:bg-brand-gold-dark transition-colors"
                  >
                    <CalendarCheck size={16} />
                    Book Now
                  </button>
                  <Link
                    href={`/meru/${route.slug}/`}
                    className="inline-flex items-center justify-center gap-2 py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-light transition-colors"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        tripName={selectedTrip}
      />
    </>
  );
}
