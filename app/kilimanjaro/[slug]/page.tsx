import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getKilimanjaroRoutes } from "@/lib/loaders";
import RouteDetailClient from "@/components/shared/RouteDetailClient";

export async function generateStaticParams() {
  const routes = getKilimanjaroRoutes();
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const routes = getKilimanjaroRoutes();
  const route = routes.find((r) => r.slug === slug);
  if (!route) return {};

  return {
    title: `${route.title} | Kilimanjaro Climb`,
    description: `${route.description} Duration: ${route.summary?.length}. Difficulty: ${route.summary?.difficulty}. Book your Kilimanjaro climb with Meru2Kili.`,
    alternates: {
      canonical: `https://www.meru2kili.com/kilimanjaro/${slug}/`,
    },
    openGraph: {
      title: `${route.title} | Kilimanjaro Climb`,
      description: route.description,
      url: `https://www.meru2kili.com/kilimanjaro/${slug}/`,
      type: "article",
      images: route.image ? [{ url: `https://www.meru2kili.com${route.image}` }] : undefined,
    },
  };
}

export default async function KilimanjaroRoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const routes = getKilimanjaroRoutes();
  const route = routes.find((r) => r.slug === slug);
  if (!route) return notFound();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: route.title,
      description: route.description,
      image: route.image ? `https://www.meru2kili.com${route.image}` : undefined,
      url: `https://www.meru2kili.com/kilimanjaro/${slug}/`,
      touristType: "Adventure travel, Mountain climbing",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Duration", value: route.summary?.length },
        { "@type": "PropertyValue", name: "Difficulty", value: route.summary?.difficulty },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.meru2kili.com/" },
        { "@type": "ListItem", position: 2, name: "Kilimanjaro", item: "https://www.meru2kili.com/kilimanjaro/" },
        { "@type": "ListItem", position: 3, name: route.title, item: `https://www.meru2kili.com/kilimanjaro/${slug}/` },
      ],
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src={route.image || "/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg"}
          alt={route.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
            {route.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/80 text-sm">
            <span>Duration: {route.summary?.length}</span>
            <span>Type: {route.summary?.type}</span>
            <span>Difficulty: {route.summary?.difficulty}</span>
          </div>
        </div>
      </section>

      <RouteDetailClient route={route} category="kilimanjaro" />
    </div>
  );
}
