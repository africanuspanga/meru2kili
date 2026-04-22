import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { MapPin, Clock, ArrowRight, Check } from "lucide-react";
import { dayTrips } from "@/lib/day-trips-data";

export default function DayTripsHighlightsSection() {
  // Pick 3 most popular day trips
  const featured = [
    dayTrips.find((t) => t.slug === "materuni-waterfalls-coffee-tour"),
    dayTrips.find((t) => t.slug === "maji-chemka-hot-springs"),
    dayTrips.find((t) => t.slug === "marangu-village-waterfalls"),
  ].filter(Boolean);

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Day Excursions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Explore <span className="text-brand-green">Kilimanjaro&apos;s Backyard</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Waterfalls, hot springs, coffee tours, and cultural experiences — perfect add-ons to your mountain adventure.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((trip, i) =>
            trip ? (
              <AnimatedSection key={trip.slug} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${trip.tagColor}`}
                    >
                      {trip.tag}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {trip.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={12} className="text-brand-green" />
                        Full Day
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={12} className="text-brand-green" />
                        Near Moshi
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1 leading-relaxed">
                      {trip.description}
                    </p>

                    <div className="mb-4 space-y-1">
                      {trip.highlights.slice(0, 2).map((h, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-gray-600"
                        >
                          <Check
                            size={12}
                            className="text-brand-green mt-0.5 shrink-0"
                          />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/contact?trip=${encodeURIComponent(trip.title)}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
                    >
                      Book This Trip
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ) : null
          )}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link
            href="/day-trips"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-light transition-colors shadow-lg"
          >
            View All Day Trips
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
