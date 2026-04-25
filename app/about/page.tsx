import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Mountain, Compass, Heart, Shield, Award, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Meru2Kili Hiking & Safaris, founded by Remid Mmasy with 20+ years of experience guiding climbs of Kilimanjaro, Meru, and Tanzania safaris.",
  alternates: {
    canonical: "https://www.meru2kili.com/about/",
  },
  openGraph: {
    title: "About Meru2Kili | 20+ Years of Guiding Experience",
    description:
      "Learn about Meru2Kili Hiking & Safaris, founded by Remid Mmasy with 20+ years of experience guiding climbs of Kilimanjaro, Meru, and Tanzania safaris.",
    url: "https://www.meru2kili.com/about/",
    type: "website",
    images: [
      {
        url: "https://www.meru2kili.com/Kilimanjaro National Park.jpeg",
        width: 1200,
        height: 630,
        alt: "About Meru2Kili Hiking & Safaris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Meru2Kili | 20+ Years of Guiding Experience",
    description:
      "Learn about Meru2Kili Hiking & Safaris, founded by Remid Mmasy with 20+ years of experience guiding climbs of Kilimanjaro, Meru, and Tanzania safaris.",
    images: ["https://www.meru2kili.com/Kilimanjaro National Park.jpeg"],
  },
};

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.meru2kili.com/" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.meru2kili.com/about/" },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Kilimanjaro National Park.jpeg"
          alt="About Meru2Kili"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            About <span className="text-brand-gold">Us</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Two decades of passion, expertise, and unforgettable adventures in Tanzania.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/About section.jpeg"
                  alt="Meru2Kili team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                  Our <span className="text-brand-green">Story</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Meru2Kili Hiking & Safaris was born from a deep love for Tanzania&apos;s mountains and wilderness. Founded by Remid Mmasy, who spent over 20 years guiding climbers to the Roof of Africa, our company represents the gold standard in mountain trekking and safari experiences.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We believe that every traveler deserves a safe, enriching, and memorable adventure. From the snow-capped summit of Kilimanjaro to the savannahs of the Serengeti, we craft journeys that connect people with nature, culture, and themselves.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team of certified guides, porters, and drivers are all locally employed, ensuring authentic experiences while supporting the communities that make these adventures possible.
                </p>
              </AnimatedSection>
            </div>
          </div>

          {/* Values */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our <span className="text-brand-green">Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Safety First", desc: "Every climb includes emergency oxygen, comprehensive first aid, and guides trained in wilderness rescue." },
              { icon: Compass, title: "Expert Guidance", desc: "Our certified guides have decades of combined experience and intimate knowledge of every trail." },
              { icon: Heart, title: "Community Support", desc: "We employ local staff, pay fair wages, and follow KPAP guidelines for porter welfare." },
              { icon: Mountain, title: "Environmental Care", desc: "Leave No Trace principles guide every expedition. We protect the landscapes we love." },
              { icon: Award, title: "Excellence", desc: "Recognized by TripAdvisor, Google Reviews, and Trustpilot for outstanding service." },
              { icon: Users, title: "Personalized Service", desc: "Small group sizes and tailored itineraries ensure every guest gets individual attention." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full hover:bg-brand-green/5 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className="py-20 bg-brand-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedSection>
                <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  Meet the Founder
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                  Remid <span className="text-brand-green">Mmasy</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With over <strong>20 years of experience</strong> guiding climbers to the summits of Mount Kilimanjaro, Mount Meru, and other peaks across East Africa, Remid Mmasy is one of Tanzania&apos;s most respected mountain guides.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  His deep knowledge of the mountains, commitment to climber safety, and warm hospitality have made him a favorite among adventurers from around the world. Under his leadership, Meru2Kili has grown into a trusted name for Kilimanjaro climbs, Meru ascents, and Northern Circuit safaris.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Remid personally oversees every expedition, ensuring that each guest receives the highest level of care, professionalism, and authentic Tanzanian hospitality.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Years", value: "20+" },
                    { label: "Summits", value: "500+" },
                    { label: "Dedication", value: "100%" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                      <div className="text-xl font-bold text-brand-green">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                  <Image
                    src="/About Founder.jpeg"
                    alt="Remid Mmasy - Founder of Meru2Kili"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-sm font-bold text-brand-green">Remid Mmasy</p>
                  <p className="text-xs text-gray-500">Founder & Lead Guide</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Ready to Start Your <span className="text-brand-gold">Adventure?</span>
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Get in touch with Remid and the Meru2Kili team to plan your perfect Tanzanian adventure.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-gold text-brand-green font-bold rounded-xl hover:bg-brand-gold-dark transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
