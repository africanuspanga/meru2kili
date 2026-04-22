import { MetadataRoute } from "next";
import { getKilimanjaroRoutes, getMeruRoutes, getSafariPackages } from "@/lib/loaders";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.meru2kili.com";

  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/kilimanjaro/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/meru/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/safaris/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/day-trips/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const kilimanjaroRoutes = getKilimanjaroRoutes().map((route) => ({
    url: `${baseUrl}/kilimanjaro/${route.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const meruRoutes = getMeruRoutes().map((route) => ({
    url: `${baseUrl}/meru/${route.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const safariPackages = getSafariPackages().map((pkg) => ({
    url: `${baseUrl}/safaris/${pkg.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...kilimanjaroRoutes, ...meruRoutes, ...safariPackages];
}
