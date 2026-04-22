import Image from "next/image";
import Link from "next/link";
import { getSafariPackages } from "@/lib/loaders";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Clock, MapPin, ArrowRight, Binoculars } from "lucide-react";

export default function SafarisPage() {
  const packages = getSafariPackages();

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Kilimanjaro National Park.jpeg"
          alt="Tanzania Safari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Tanzania <span className="text-brand-gold">Safaris</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore the legendary Northern Circuit — Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Safari Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Choose Your <span className="text-brand-green">Adventure</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.slug} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={pkg.image || "/Kilimanjaro National Park.jpeg"}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 right-3 bg-brand-gold text-brand-green text-xs font-bold px-3 py-1 rounded-full">
                      Safari
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{pkg.title}</h3>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Clock size={14} className="text-brand-green" />
                        Multi-day
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <MapPin size={14} className="text-brand-green" />
                        Northern Circuit
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Binoculars size={14} className="text-brand-green" />
                        Big 5
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-6 line-clamp-3 flex-1">
                      Experience Tanzania&apos;s world-famous wildlife on this carefully crafted safari itinerary with professional guides and comfortable accommodation.
                    </p>

                    <Link
                      href={`/safaris/${pkg.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-light transition-colors"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
