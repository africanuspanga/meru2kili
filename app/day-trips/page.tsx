import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { MapPin, Clock, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const trips = [
  {
    slug: "marangu-village-waterfalls",
    title: "Marangu Village & Waterfalls",
    tag: "Culture & Nature",
    tagColor: "bg-green-100 text-green-700",
    image: "/day trips images/marangu day trip.jpeg",
    description:
      "Explore the famous village at the foothills of Kilimanjaro. Walk through lush green landscapes to hidden waterfalls, visit historic Chagga caves used during tribal wars, and experience authentic village life with coffee and banana farm tours.",
    highlights: [
      "Easy scenic hike through rainforest trails",
      "Visit Kinukamori & Ndoro waterfalls",
      "Explore historic Chagga caves",
      "Swim in natural waterfall pools",
    ],
  },
  {
    slug: "materuni-waterfalls-coffee-tour",
    title: "Materuni Waterfalls & Coffee Tour",
    tag: "Waterfall & Coffee",
    tagColor: "bg-blue-100 text-blue-700",
    image: "/day trips images/materuni day trip.jpeg",
    description:
      "Trek to one of the tallest waterfalls on Kilimanjaro's slopes, cascading 80 meters into a crystal-clear pool. Then join a local Chagga family for a hands-on coffee tour — from bean to cup — with tastings of fresh Arabica coffee.",
    highlights: [
      "80m waterfall with natural swimming pool",
      "Scenic hike through coffee plantations",
      "Traditional coffee-making experience",
      "Panoramic views of Kilimanjaro",
    ],
  },
  {
    slug: "napuru-waterfalls",
    title: "Napuru Waterfalls",
    tag: "Hidden Gem",
    tagColor: "bg-emerald-100 text-emerald-700",
    image: "/day trips images/napuru.jpeg",
    description:
      "Discover a peaceful off-the-beaten-path waterfall near Arusha. Hike through montane forest alive with birdsong, cross rocky streams, and enjoy the tranquility of this lesser-known natural treasure.",
    highlights: [
      "Quiet, uncrowded nature escape",
      "Forest hike with birdwatching",
      "Swim beneath the cascading falls",
      "Perfect for photographers",
    ],
  },
  {
    slug: "maji-chemka-hot-springs",
    title: "Maji Chemka (Kikuletwa Hot Springs)",
    tag: "Hot Springs",
    tagColor: "bg-cyan-100 text-cyan-700",
    image: "/day trips images/maji chemka.jpeg",
    description:
      "Relax in a stunning natural oasis with crystal-clear turquoise water fed by Kilimanjaro's underground springs. Surrounded by palm and fig trees, this hidden paradise offers swimming, rope swings, and a natural fish spa.",
    highlights: [
      "Crystal-clear turquoise swimming water",
      "Rope swing & cliff jumps",
      "Natural fish spa experience",
      "Tropical oasis in the savannah",
    ],
  },
  {
    slug: "londorosi-forest-shira",
    title: "Londorosi (Forest & Shira Plateau)",
    tag: "Forest & Wildlife",
    tagColor: "bg-amber-100 text-amber-700",
    image: "/day trips images/Londorosi.jpeg",
    description:
      "Experience Kilimanjaro's wild western side. Drive through rainforest to Londorosi Gate, then hike onto the vast Shira Plateau at 3,400m for breathtaking views of Kibo peak and encounters with colobus monkeys.",
    highlights: [
      "Hike on the Shira Plateau (3,400m)",
      "Spot colobus monkeys & exotic birds",
      "Panoramic views of Kibo summit",
      "Explore ancient volcanic landscapes",
    ],
  },
];

export const metadata: Metadata = {
  title: "Day Trips",
  description:
    "Discover hidden gems around Mount Kilimanjaro — waterfalls, hot springs, coffee tours, and authentic village experiences with Meru2Kili.",
  alternates: {
    canonical: "https://www.meru2kili.com/day-trips/",
  },
  openGraph: {
    title: "Day Trips Around Kilimanjaro | Meru2Kili",
    description:
      "Discover hidden gems around Mount Kilimanjaro — waterfalls, hot springs, coffee tours, and authentic village experiences.",
    url: "https://www.meru2kili.com/day-trips/",
    type: "website",
  },
};

export default function DayTripsPage() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/day trips images/materuni day trip.jpeg"
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
            {trips.map((trip, i) => (
              <AnimatedSection key={trip.slug} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${trip.tagColor}`}>
                      {trip.tag}
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

                    <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
                      {trip.description}
                    </p>

                    <div className="mb-5 space-y-1.5">
                      {trip.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check size={14} className="text-brand-green mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
