import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getSafariPackages } from "@/lib/loaders";
import SafariDetailClient from "@/components/shared/SafariDetailClient";

export async function generateStaticParams() {
  const packages = getSafariPackages();
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const packages = getSafariPackages();
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return {};

  return {
    title: `${pkg.title} | Tanzania Safari`,
    description: `${pkg.description} Book your Northern Circuit safari with Meru2Kili.`,
    alternates: {
      canonical: `https://www.meru2kili.com/safaris/${slug}/`,
    },
    openGraph: {
      title: `${pkg.title} | Tanzania Safari`,
      description: pkg.description,
      url: `https://www.meru2kili.com/safaris/${slug}/`,
      type: "article",
      images: pkg.image ? [{ url: `https://www.meru2kili.com${pkg.image}` }] : undefined,
    },
  };
}

export default async function SafariDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const packages = getSafariPackages();
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return notFound();

  return (
    <div>
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src={pkg.image || "/safari-images/rhino-ngorongoro.jpg"}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
            {pkg.title}
          </h1>
          <p className="text-white/80 text-sm">Northern Circuit Safari Package</p>
        </div>
      </section>

      <SafariDetailClient pkg={pkg} />
    </div>
  );
}
