import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Mountain, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MeruPage() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Morum Peak site.jpeg"
          alt="Mount Meru"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Mount <span className="text-brand-gold">Meru</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Tanzania&apos;s second highest peak and the perfect warm-up for Kilimanjaro. A wild, beautiful climb through Arusha National Park.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/About page.jpeg"
                  alt="Mount Meru climbing"
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
                  The trek takes you through diverse landscapes — lush rainforest, heather and moorland, alpine desert, and finally the spectacular crater rim. Along the way, you may spot elephants, buffalo, giraffes, and colobus monkeys.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Mountain, label: "Elevation", value: "4,566m" },
                    { icon: Clock, label: "Duration", value: "3-4 Days" },
                    { icon: MapPin, label: "Location", value: "Arusha NP" },
                    { icon: Mountain, label: "Difficulty", value: "Moderate" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-50 rounded-xl p-4 text-center">
                      <stat.icon size={20} className="mx-auto text-brand-green mb-2" />
                      <p className="text-xs text-gray-500">{stat.label}</p>
                      <p className="text-sm font-bold text-gray-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h3 className="font-bold text-gray-900 mb-3">Highlights</h3>
                <ul className="space-y-2 mb-8">
                  {[
                    "Walk through Arusha National Park with wildlife encounters",
                    "Stunning views of Kilimanjaro from the slopes",
                    "Climb the dramatic ash cone inside the crater",
                    "Spectacular sunrise from Socialist Peak",
                    "Fewer crowds than Kilimanjaro routes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-light transition-colors"
                  >
                    Book Mount Meru
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://wa.me/255755873991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-brand-green font-bold rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
