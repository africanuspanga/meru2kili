import { notFound } from "next/navigation";
import Image from "next/image";
import { getKilimanjaroRoutes } from "@/lib/loaders";
import RouteDetailClient from "@/components/shared/RouteDetailClient";

export async function generateStaticParams() {
  const routes = getKilimanjaroRoutes();
  return routes.map((r) => ({ slug: r.slug }));
}

export default function KilimanjaroRoutePage({ params }: { params: { slug: string } }) {
  const routes = getKilimanjaroRoutes();
  const route = routes.find((r) => r.slug === params.slug);
  if (!route) return notFound();

  return (
    <div>
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
