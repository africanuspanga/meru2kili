import type { Metadata } from "next";
import Image from "next/image";
import { getKilimanjaroRoutes } from "@/lib/loaders";
import AnimatedSection from "@/components/shared/AnimatedSection";
import KilimanjaroRoutesGrid from "@/components/shared/KilimanjaroRoutesGrid";

export const metadata: Metadata = {
  title: "Kilimanjaro Routes",
  description:
    "Choose from 7 iconic routes to the summit of Mount Kilimanjaro. Machame, Marangu, Lemosho, Rongai, Umbwe, Londorosi, and Northern Circuit routes with expert guides and full support.",
  alternates: {
    canonical: "https://www.meru2kili.com/kilimanjaro/",
  },
  openGraph: {
    title: "Kilimanjaro Climbing Routes | Meru2Kili",
    description:
      "Choose from 7 iconic routes to the summit of Mount Kilimanjaro. Expert guides, full support, and 20+ years of experience.",
    url: "https://www.meru2kili.com/kilimanjaro/",
    type: "website",
    images: [
      {
        url: "https://www.meru2kili.com/Uhuru Peak 1.jpeg",
        width: 1200,
        height: 630,
        alt: "Kilimanjaro Climbing Routes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kilimanjaro Climbing Routes | Meru2Kili",
    description:
      "Choose from 7 iconic routes to the summit of Mount Kilimanjaro. Expert guides, full support, and 20+ years of experience.",
    images: ["https://www.meru2kili.com/Uhuru Peak 1.jpeg"],
  },
};

export default function KilimanjaroPage() {
  const routes = getKilimanjaroRoutes();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.meru2kili.com/" },
      { "@type": "ListItem", position: 2, name: "Kilimanjaro", item: "https://www.meru2kili.com/kilimanjaro/" },
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
          src="/Uhuru Peak 1.jpeg"
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
            Choose from 7 iconic routes to the Roof of Africa. Each offers a unique journey to Uhuru Peak at 5,895 meters.
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

          <KilimanjaroRoutesGrid routes={routes} />
        </div>
      </section>
    </div>
  );
}
