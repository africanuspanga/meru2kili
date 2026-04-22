import Image from "next/image";
import Link from "next/link";
import { getSafariPackages } from "@/lib/loaders";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CalendarDays, MapPin, ArrowRight, Binoculars } from "lucide-react";

export default function SafariHighlightsSection() {
  const packages = getSafariPackages();
  // Pick 3 representative safaris: shortest, mid-range, longest
  const featured = [
    packages.find((p) => p.slug.includes("2-days")),
    packages.find((p) => p.slug.includes("5-days")),
    packages.find((p) => p.slug.includes("10-days")),
  ].filter(Boolean);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Safari Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Discover Tanzania&apos;s <span className="text-brand-green">Wildlife</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From the iconic Serengeti to the breathtaking Ngorongoro Crater — experience the best of East Africa&apos;s safari circuit.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((pkg, i) =>
            pkg ? (
              <AnimatedSection key={pkg.slug} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={pkg.image || "/safari-images/rhino-ngorongoro.jpg"}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 bg-brand-gold text-brand-green text-xs font-bold px-3 py-1 rounded-full">
                      {pkg.safariItinerary?.length || 0} Days
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {pkg.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <CalendarDays size={12} className="text-brand-green" />
                        {pkg.safariItinerary?.length || 0} Days
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={12} className="text-brand-green" />
                        Northern Circuit
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Binoculars size={12} className="text-brand-green" />
                        Big 5
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-5 line-clamp-3 flex-1 leading-relaxed">
                      {pkg.description}
                    </p>

                    <Link
                      href={`/safaris/${pkg.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
                    >
                      View Itinerary
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
            href="/safaris"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-light transition-colors shadow-lg"
          >
            View All Safaris
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
