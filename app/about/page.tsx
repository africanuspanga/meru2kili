import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Mountain, Compass, Heart, Shield, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-brand-green">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            About <span className="text-brand-gold">Us</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Two decades of passion, expertise, and unforgettable adventures in Tanzania.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
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

          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our <span className="text-brand-green">Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "Every climb includes emergency oxygen, comprehensive first aid, and guides trained in wilderness rescue.",
              },
              {
                icon: Compass,
                title: "Expert Guidance",
                desc: "Our certified guides have decades of combined experience and intimate knowledge of every trail.",
              },
              {
                icon: Heart,
                title: "Community Support",
                desc: "We employ local staff, pay fair wages, and follow KPAP guidelines for porter welfare.",
              },
              {
                icon: Mountain,
                title: "Environmental Care",
                desc: "Leave No Trace principles guide every expedition. We protect the landscapes we love.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "Recognized by TripAdvisor, Google Reviews, and Trustpilot for outstanding service.",
              },
              {
                icon: Users,
                title: "Personalized Service",
                desc: "Small group sizes and tailored itineraries ensure every guest gets individual attention.",
              },
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
    </div>
  );
}
