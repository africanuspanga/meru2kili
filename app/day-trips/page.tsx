import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { getDayTrips } from "@/lib/loaders";
import { MapPin, Clock, Droplets, ArrowRight, Leaf, Waves, TreePine } from "lucide-react";
import Link from "next/link";

export default function DayTripsPage() {
  const trips = getDayTrips();

  const tripMeta: Record<string, { icon: any; color: string; tag: string }> = {
    marangu: { icon: TreePine, color: "bg-green-100 text-green-700", tag: "Culture & Nature" },
    materuni: { icon: Droplets, color: "bg-blue-100 text-blue-700", tag: "Waterfall & Coffee" },
    napuru: { icon: Leaf, color: "bg-emerald-100 text-emerald-700", tag: "Hidden Gem" },
    maji: { icon: Waves, color: "bg-cyan-100 text-cyan-700", tag: "Hot Springs" },
    londorosi: { icon: TreePine, color: "bg-amber-100 text-amber-700", tag: "Forest & Wildlife" },
  };

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Day Trip.jpeg"
          alt="Tanzania Day Trips"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Day <span className="text-brand-gold">Trips</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover the hidden gems around Mount Kilimanjaro — waterfalls, hot springs, coffee tours, and authentic village experiences.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Excursions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Explore <span className="text-brand-green">Kilimanjaro&apos;s Backyard</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip, i) => {
              const metaKey = Object.keys(tripMeta).find((k) => trip.slug.includes(k));
              const meta = metaKey ? tripMeta[metaKey] : { icon: MapPin, color: "bg-gray-100 text-gray-700", tag: "Day Trip" };
              const Icon = meta.icon;

              return (
                <AnimatedSection key={trip.slug} delay={i * 0.1}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={trip.image || "/Day Trip.jpeg"}
                        alt={trip.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${meta.color}`}>
                        {meta.tag}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{trip.title}</h3>

                      <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <Clock size={14} className="text-brand-green" />
                          Full Day
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <MapPin size={14} className="text-brand-green" />
                          Near Moshi
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 mb-6 line-clamp-4 flex-1">
                        {trip.description}
                      </p>

                      <Link
                        href={`/contact?trip=${encodeURIComponent(trip.title)}`}
                        className="inline-flex items-center justify-center gap-2 w-full py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-light transition-colors"
                      >
                        Book This Trip
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
