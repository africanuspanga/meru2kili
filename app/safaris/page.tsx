import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSafariPackages } from "@/lib/loaders";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Clock, MapPin, ArrowRight, Binoculars, CalendarDays, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tanzania Safaris",
  description:
    "Explore Tanzania's legendary Northern Circuit — Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara. Expert-guided safaris with Meru2Kili.",
  alternates: {
    canonical: "https://www.meru2kili.com/safaris/",
  },
  openGraph: {
    title: "Tanzania Safaris | Serengeti & Ngorongoro | Meru2Kili",
    description:
      "Explore Tanzania's legendary Northern Circuit — Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara.",
    url: "https://www.meru2kili.com/safaris/",
    type: "website",
    images: [
      {
        url: "https://www.meru2kili.com/safari-images/rhino-ngorongoro.jpg",
        width: 1200,
        height: 630,
        alt: "Tanzania Safaris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Safaris | Serengeti & Ngorongoro | Meru2Kili",
    description:
      "Explore Tanzania's legendary Northern Circuit — Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara.",
    images: ["https://www.meru2kili.com/safari-images/rhino-ngorongoro.jpg"],
  },
};

export default function SafarisPage() {
  const packages = getSafariPackages();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.meru2kili.com/" },
      { "@type": "ListItem", position: 2, name: "Safaris", item: "https://www.meru2kili.com/safaris/" },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/safari-images/rhino-ngorongoro.jpg"
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
                      src={pkg.image || "/safari-images/rhino-ngorongoro.jpg"}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 right-3 bg-brand-gold text-brand-green text-xs font-bold px-3 py-1 rounded-full">
                      {pkg.safariItinerary?.length || 0} Days
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{pkg.title}</h3>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <CalendarDays size={14} className="text-brand-green" />
                        {pkg.safariItinerary?.length || 0} Days
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

                    <p className="text-sm text-gray-600 mb-6 line-clamp-3 flex-1 leading-relaxed">
                      {pkg.description || "Experience Tanzania's world-famous wildlife on this carefully crafted safari itinerary with professional guides and comfortable accommodation."}
                    </p>

                    <Link
                      href={`/safaris/${pkg.slug}/`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-light transition-colors"
                    >
                      View Full Itinerary
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl translate-x-1/2 translate-y/2" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Go on <span className="text-brand-gold">Safari?</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Get a personalized quote, check availability, or ask us anything about your dream Tanzania safari.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-gold text-brand-green font-bold rounded-xl hover:bg-brand-gold-dark transition-all shadow-lg text-base"
            >
              <MessageCircle size={20} />
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
