import type { Metadata } from "next";
import Image from "next/image";
import { getMeruRoutes } from "@/lib/loaders";
import AnimatedSection from "@/components/shared/AnimatedSection";
import MeruRoutesGrid from "@/components/shared/MeruRoutesGrid";
import { Mountain, MapPin, Clock, Compass, Eye, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Mount Meru Treks",
  description:
    "Climb Mount Meru, Tanzania's second highest peak at 4,566m. Choose from a scenic 2-day trek or the full 3-day summit route through Arusha National Park.",
  alternates: {
    canonical: "https://www.meru2kili.com/meru/",
  },
  openGraph: {
    title: "Mount Meru Climbing | 2 & 3 Day Treks | Meru2Kili",
    description:
      "Climb Mount Meru, Tanzania's second highest peak at 4,566m. Scenic 2-day trek or full 3-day summit route through Arusha National Park.",
    url: "https://www.meru2kili.com/meru/",
    type: "website",
    images: [
      {
        url: "https://www.meru2kili.com/meru-images/meru-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mount Meru Climbing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Meru Climbing | 2 & 3 Day Treks | Meru2Kili",
    description:
      "Climb Mount Meru, Tanzania's second highest peak at 4,566m. Scenic 2-day trek or full 3-day summit route through Arusha National Park.",
    images: ["https://www.meru2kili.com/meru-images/meru-hero.jpg"],
  },
};

export default function MeruPage() {
  const routes = getMeruRoutes();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.meru2kili.com/" },
      { "@type": "ListItem", position: 2, name: "Mount Meru", item: "https://www.meru2kili.com/meru/" },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/meru-images/meru-hero.jpg"
          alt="Mount Meru"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Mount <span className="text-brand-gold">Meru</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Tanzania&apos;s second highest peak and the perfect warm-up for Kilimanjaro. A wild, beautiful climb through Arusha National Park.
          </p>
        </div>
      </section>

      {/* About / Why Meru */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/meru-images/meru-panorama.jpg"
                  alt="Mount Meru panorama"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection>
                <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  About the Climb
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                  The Perfect <span className="text-brand-green">Warm-Up</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Standing at 4,566 meters (14,980 feet), Mount Meru is Tanzania&apos;s second highest mountain and Africa&apos;s fifth highest peak. Located in the heart of Arusha National Park, it offers a stunning and less crowded alternative or preparation climb for Kilimanjaro.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The trek takes you through diverse landscapes — lush rainforest, heather and moorland, alpine desert, and finally the spectacular crater rim. Along the way, you may spot elephants, buffalo, giraffes, and colobus monkeys with an armed ranger by your side.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Mountain, label: "Elevation", value: "4,566m" },
                    { icon: Clock, label: "Duration", value: "2-3 Days" },
                    { icon: MapPin, label: "Location", value: "Arusha NP" },
                    { icon: Compass, label: "Difficulty", value: "Moderate" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-50 rounded-xl p-4 text-center">
                      <stat.icon size={20} className="mx-auto text-brand-green mb-2" />
                      <p className="text-xs text-gray-500">{stat.label}</p>
                      <p className="text-sm font-bold text-gray-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Why Climb <span className="text-brand-green">Meru</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "Walking Safari",
                desc: "Trek through Arusha National Park with an armed ranger and encounter giraffes, zebras, buffalo, elephants, and colobus monkeys along the trail.",
              },
              {
                icon: Mountain,
                title: "Stunning Views",
                desc: "Enjoy spectacular sunrise views of Mount Kilimanjaro from the summit and breathtaking panoramas of the Meru crater and ash cone.",
              },
              {
                icon: Compass,
                title: "Great Acclimatization",
                desc: "The perfect warm-up climb for Kilimanjaro. Experience high altitude trekking with a lower commitment and excellent summit success rates.",
              },
              {
                icon: ShieldCheck,
                title: "Fewer Crowds",
                desc: "Escape the busy Kilimanjaro trails and enjoy a more intimate mountain experience with pristine wilderness and solitude.",
              },
              {
                icon: MapPin,
                title: "Dramatic Crater Rim",
                desc: "Walk the exhilarating narrow ridge between the inner crater cliffs and outer walls for a truly unforgettable alpine adventure.",
              },
              {
                icon: Clock,
                title: "Flexible Duration",
                desc: "Choose between a scenic 2-day trek or the full 3-day summit attempt to Socialist Peak at 4,566 meters.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Our Routes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Choose Your <span className="text-brand-green">Adventure</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Whether you want a scenic two-day trek or the full summit experience, we have the perfect Mount Meru route for you.
            </p>
          </AnimatedSection>

          <MeruRoutesGrid routes={routes} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/meru-images/meru-hikers.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Conquer Mount Meru?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to book your trek or ask any questions. Our experienced team is here to help you plan the perfect adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-green font-bold rounded-xl hover:bg-brand-gold-dark transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://wa.me/255755873991"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
