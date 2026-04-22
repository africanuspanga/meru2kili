export interface RouteSummary {
  length: string;
  type: string;
  difficulty: string;
}

export interface ItineraryDay {
  day: string;
  title: string;
  trekkingTime?: string;
  climaticZone?: string;
  altitudeGained?: string;
  description: string;
}

export interface TripPackage {
  slug: string;
  title: string;
  category: "kilimanjaro" | "safari" | "day-trip" | "meru";
  summary?: RouteSummary;
  description: string;
  itinerary?: ItineraryDay[];
  inclusions?: string[];
  exclusions?: string[];
  notes?: string[];
  image?: string;
  priceNote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}
