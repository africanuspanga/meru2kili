import Image from "next/image";
import Link from "next/link";
import { getKilimanjaroRoutes } from "@/lib/loaders";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Clock, Mountain, ArrowRight, Tent } from "lucide-react";

export default function KilimanjaroPage() {
  const routes = getKilimanjaroRoutes();

  const difficultyColor = (d: string) => {
    if (d.toLowerCase().includes("moderate")) return "bg-blue-100 text-blue-700";
    if (d.toLowerCase().includes("demanding")) return "bg-orange-100 text-orange-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg"
          alt="Mount Kilimanjaro"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Mount <span className="text-brand-gold">Kilimanjaro</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Choose from 6 iconic routes to the Roof of Africa. Each offers a unique journey to Uhuru Peak at 5,895 meters.
          </p>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Our Routes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Choose Your <span className="text-brand-green">Route</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, i) => (
              <AnimatedSection key={route.slug} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={route.image || "/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg"}
                      alt={route.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColor(route.summary?.difficulty || "")}`}>
                        {route.summary?.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{route.title}</h3>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Clock size={14} className="text-brand-green" />
                        {route.summary?.length}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Tent size={14} className="text-brand-green" />
                        {route.summary?.type}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Mountain size={14} className="text-brand-green" />
                        5,895m
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-6 line-clamp-3 flex-1">
                      {route.itinerary?.[0]?.description || "Experience an unforgettable journey to the summit of Africa's highest peak with our expert guides."}
                    </p>

                    <Link
                      href={`/kilimanjaro/${route.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-light transition-colors"
                    >
                      Read More
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
