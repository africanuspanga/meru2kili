import fs from "fs";
import path from "path";
import { TripPackage, SafariDay } from "./types";

const contentDir = path.join(process.cwd(), "public", "content");

export function getKilimanjaroRoutes(): TripPackage[] {
  const dir = path.join(contentDir, "Kilimanjaro packages");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const slug = slugifyFromFile(file);
    return parseKilimanjaroPackage(raw, slug);
  });
}

export function getSafariPackages(): TripPackage[] {
  const dir = path.join(contentDir, "safari packages files");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const slug = slugifyFromFile(file);
    return parseSafariPackage(raw, slug);
  });
}

export function getMeruRoutes(): TripPackage[] {
  const dir = path.join(contentDir, "Meru packages");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const slug = slugifyFromFile(file);
    return parseMeruPackage(raw, slug);
  });
}

export function getDayTrips(): TripPackage[] {
  const file = path.join(contentDir, "Day Trips.md");
  const raw = fs.readFileSync(file, "utf-8");
  return parseDayTrips(raw);
}

function slugifyFromFile(filename: string): string {
  return filename
    .replace(/\.docx\.md$/, "")
    .replace(/\.md$/, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function cleanText(text: string): string {
  return text
    .replace(/\*\*/g, "")
    .replace(/\\-/g, "-")
    .replace(/\\\./g, ".")
    .replace(/\\,/g, ",")
    .trim();
}

function extractTableValue(line: string): string {
  const parts = line.split("|");
  return parts[2]?.trim() || "";
}

const routeDescriptions: Record<string, string> = {
  "kilimanjaro---lemosho-route-7-8-day":
    "The Lemosho Route is widely considered the most beautiful path to the summit of Kilimanjaro. Starting on the western side of the mountain, it offers stunning scenery, excellent acclimatization, and high summit success rates.",
  "kilimanjaro---machame-route":
    "The Machame Route, also known as the Whiskey Route, is one of the most popular and scenic paths on Kilimanjaro. It features dramatic landscapes, challenging terrain, and great acclimatization with its climb-high-sleep-low profile.",
  "kilimanjaro---marangu-route":
    "The Marangu Route, known as the Coca-Cola Route, is the oldest and most established path on Kilimanjaro. It is the only route offering hut accommodation, making it a comfortable choice for those preferring not to camp.",
  "kilimanjaro---rongai-route-5-day":
    "The Rongai Route is the only trail that approaches Kilimanjaro from the north, near the Kenyan border. This 5-day itinerary offers a unique wilderness experience with fewer crowds and a chance to spot wildlife.",
  "kilimanjaro---rongai-route-6-7-day":
    "The Rongai Route from the north provides a more gradual ascent and drier weather conditions. This extended 6 to 7-day version includes extra time for acclimatization and exploration of the majestic Mawenzi Peak.",
  "kilimanjaro---umbwe-route":
    "The Umbwe Route is the shortest, steepest, and most challenging route on Kilimanjaro. It is ideal for experienced trekkers seeking a tough, direct path to the summit with dramatic scenery and solitude.",
};

const routeImages: Record<string, string> = {
  "kilimanjaro---lemosho-route-7-8-day": "/Kilimanjaro images/shira-2-camp.jpg",
  "kilimanjaro---machame-route": "/Kilimanjaro images/machame-hut-camps.jpg",
  "kilimanjaro---marangu-route": "/Kilimanjaro images/horombo-hut.jpg",
  "kilimanjaro---rongai-route-5-day": "/Kilimanjaro images/simba-camp.jpg",
  "kilimanjaro---rongai-route-6-7-day": "/Kilimanjaro images/rongai-gate-sign.jpg",
  "kilimanjaro---umbwe-route": "/Kilimanjaro images/barranco-camp.jpg",
};

const meruDescriptions: Record<string, string> = {
  "mount-meru--2-day-route":
    "A scenic two-day trek through Arusha National Park perfect for those with limited time. Enjoy wildlife encounters, lush forests, and stunning views of Kilimanjaro without the summit attempt.",
  "mount-meru--3-day-route":
    "The classic Mount Meru summit trek reaching Socialist Peak at 4,566 meters. This challenging but rewarding climb offers dramatic crater scenery, incredible sunrises, and an unforgettable wilderness experience.",
};

const meruImages: Record<string, string> = {
  "mount-meru--2-day-route": "/meru-images/meru-crater.jpg",
  "mount-meru--3-day-route": "/meru-images/meru-snow.jpg",
};

function parseKilimanjaroPackage(raw: string, slug: string): TripPackage {
  return parseMountainPackage(raw, slug, "kilimanjaro", routeImages, routeDescriptions);
}

function parseMeruPackage(raw: string, slug: string): TripPackage {
  return parseMountainPackage(raw, slug, "meru", meruImages, meruDescriptions);
}

function parseMountainPackage(
  raw: string,
  slug: string,
  category: "kilimanjaro" | "meru",
  images: Record<string, string>,
  descriptions: Record<string, string>
): TripPackage {
  const lines = raw.split("\n");
  let title = "";
  let length = "";
  let type = "";
  let difficulty = "";
  const itinerary: {
    day: string;
    title: string;
    trekkingTime?: string;
    climaticZone?: string;
    altitudeGained?: string;
    description: string;
  }[] = [];
  let inclusions: string[] = [];
  let notes: string[] = [];
  let currentDay: any = null;
  let section: "body" | "inclusions" | "notes" | "itinerary" = "body";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("The ") && line.includes("Route") && !title) {
      title = cleanText(line.replace(/^#+\s*/, ""));
      continue;
    }

    if (line.includes("Length:") && line.includes("|")) {
      length = cleanText(extractTableValue(line));
      continue;
    }
    if (line.includes("Type:") && line.includes("|")) {
      type = cleanText(extractTableValue(line));
      continue;
    }
    if (line.includes("Difficulty:") && line.includes("|")) {
      difficulty = cleanText(extractTableValue(line));
      continue;
    }

    if (
      line.startsWith("# **Day") ||
      line.startsWith("# **Option Day") ||
      line.startsWith("# Day") ||
      line.startsWith("# Option Day")
    ) {
      if (currentDay) itinerary.push(currentDay);
      const match = line.match(/# \*?\*?(Day \d+(?:\/\d+)?|Option Day \d+):\s*(.*?)\*?\*?$/);
      currentDay = {
        day: cleanText(match?.[1] || ""),
        title: cleanText(match?.[2] || ""),
        description: "",
      };
      section = "itinerary";
      continue;
    }

    if (line.startsWith("| Trekking time")) {
      if (currentDay) {
        currentDay.trekkingTime = cleanText(extractTableValue(line));
      }
      continue;
    }
    if (line.startsWith("| **Climatic zone") || line.startsWith("| Climatic zone")) {
      if (currentDay) {
        currentDay.climaticZone = cleanText(extractTableValue(line));
      }
      continue;
    }
    if (line.startsWith("| **Altitude gained") || line.startsWith("| Altitude gained")) {
      if (currentDay) {
        currentDay.altitudeGained = cleanText(extractTableValue(line));
      }
      continue;
    }
    if (line.startsWith("| **Altitude lost") || line.startsWith("| Altitude lost")) {
      if (currentDay) {
        currentDay.altitudeGained = cleanText(extractTableValue(line));
      }
      continue;
    }

    if (line.includes("Package Consists of:")) {
      if (currentDay) itinerary.push(currentDay);
      currentDay = null;
      section = "inclusions";
      continue;
    }

    if (line.startsWith("**TIPPING:**") || line.startsWith("TIPPING:")) {
      section = "notes";
      notes.push(cleanText(line));
      continue;
    }

    if (line.startsWith("* ") && section === "inclusions") {
      inclusions.push(cleanText(line.replace(/^\*\s*/, "").replace(/\*$/, "")));
      continue;
    }
    if (line.startsWith("* ") && section === "notes") {
      notes.push(cleanText(line.replace(/^\*\s*/, "").replace(/\*$/, "")));
      continue;
    }

    if (section === "itinerary" && currentDay && line && !line.startsWith("|")) {
      currentDay.description += (currentDay.description ? " " : "") + cleanText(line);
    }
  }

  if (currentDay) itinerary.push(currentDay);

  const image = images[slug] || "/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg";
  const description = descriptions[slug] || "";

  return {
    slug,
    title,
    category,
    summary: { length, type, difficulty },
    description,
    itinerary,
    inclusions,
    notes,
    image,
  };
}

function parseSafariPackage(raw: string, slug: string): TripPackage {
  const lines = raw.split("\n");
  const title = lines.find((l) => l.trim().startsWith("**") && l.includes("Days"))?.replace(/\*\*/g, "").trim() || "";

  const safariItinerary: SafariDay[] = [];
  let inclusions: string[] = [];
  let exclusions: string[] = [];
  let currentDay: SafariDay | null = null;
  let section: "body" | "inclusions" | "exclusions" = "body";

  for (const line of lines) {
    const trimmed = line.trim();

    // Day header: **Day 1: Title**
    const dayMatch = trimmed.match(/^\*\*Day\s+(\d+):\s*(.*?)\*\*$/);
    if (dayMatch) {
      if (currentDay) safariItinerary.push(currentDay);
      currentDay = {
        day: `Day ${dayMatch[1]}`,
        title: dayMatch[2],
        activities: [],
      };
      continue;
    }

    if (trimmed.includes("Package Inclusions:")) {
      if (currentDay) safariItinerary.push(currentDay);
      currentDay = null;
      section = "inclusions";
      continue;
    }
    if (trimmed.includes("Package Exclusions:")) {
      section = "exclusions";
      continue;
    }

    // Activity line: * **Label:** Value
    const actMatch = trimmed.match(/^\*\s*\*\*(.*?):\*\*\s*(.*)/);
    if (actMatch && currentDay && section === "body") {
      const label = actMatch[1];
      const value = actMatch[2];
      // Capture accommodation and meal plan into dedicated fields
      if (/^Accommodation$/i.test(label)) {
        currentDay.accommodation = value;
      } else if (/^Meal Plan$/i.test(label)) {
        currentDay.mealPlan = value;
      } else {
        currentDay.activities.push({ label, value });
      }
      continue;
    }

    if (trimmed.startsWith("* ") && section === "inclusions") {
      inclusions.push(trimmed.replace(/^\*\s*/, ""));
      continue;
    }
    if (trimmed.startsWith("* ") && section === "exclusions") {
      exclusions.push(trimmed.replace(/^\*\s*/, ""));
      continue;
    }
  }
  if (currentDay) safariItinerary.push(currentDay);

  let image = "/safari-images/rhino-ngorongoro.jpg";
  const dayMatch = title.match(/(\d+)\s*Days?/i);
  if (dayMatch) {
    const days = dayMatch[1];
    const safariImageMap: Record<string, string> = {
      "2": "/safari-images/safari-2-days.jpg",
      "3": "/safari-images/safari-3-days.jpg",
      "4": "/safari-images/safari-4-days.jpg",
      "5": "/safari-images/safari-5-days.jpg",
      "8": "/safari-images/safari-8-days.jpg",
      "10": "/safari-images/rhino-ngorongoro.jpg",
    };
    image = safariImageMap[days] || image;
  }

  return {
    slug,
    title,
    category: "safari",
    description: raw.replace(/\*\*/g, "").substring(0, 400) + "...",
    safariItinerary,
    inclusions,
    exclusions,
    image,
  };
}

function parseDayTrips(raw: string): TripPackage[] {
  const trips: TripPackage[] = [];
  const lines = raw.split("\n");
  const seenSlugs = new Set<string>();

  type TripDef = {
    title: string;
    slug: string;
    image: string;
    keywords: string[];
  };

  const tripDefs: TripDef[] = [
    {
      title: "Marangu Village & Waterfalls",
      slug: "marangu-village-waterfalls",
      image: "/day trips images/marangu day trip.jpeg",
      keywords: ["Marangu Village", "Marangu"],
    },
    {
      title: "Materuni Waterfalls & Coffee Tour",
      slug: "materuni-waterfalls-coffee-tour",
      image: "/day trips images/materuni day trip.jpeg",
      keywords: ["Materuni Waterfalls", "Materuni"],
    },
    {
      title: "Napuru Waterfalls",
      slug: "napuru-waterfalls",
      image: "/day trips images/napuru.jpeg",
      keywords: ["Napuru Waterfalls", "Napuru"],
    },
    {
      title: "Maji Chemka (Kikuletwa Hot Springs) – Boma Ng'ombe",
      slug: "maji-chemka-hot-springs",
      image: "/day trips images/maji chemka.jpeg",
      keywords: ["Maji Chemka", "Kikuletwa"],
    },
    {
      title: "Londorosi (Kilimanjaro Forest & Shira Plateau Area)",
      slug: "londorosi-forest-shira",
      image: "/day trips images/Londorosi.jpeg",
      keywords: ["Londorosi", "Londrosi"],
    },
  ];

  let currentDef: TripDef | null = null;
  let paragraphs: string[] = [];
  let highlights: string[] = [];
  let inWhyItsSpecial = false;

  function saveCurrent() {
    if (!currentDef) return;
    if (seenSlugs.has(currentDef.slug)) return;
    seenSlugs.add(currentDef.slug);
    const description = paragraphs.filter((p) => p.length > 10).join("\n\n");
    trips.push({
      slug: currentDef.slug,
      title: currentDef.title,
      category: "day-trip",
      description,
      highlights,
      image: currentDef.image,
    });
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      inWhyItsSpecial = false;
      continue;
    }

    // Check if this line starts a new trip section
    const matchedDef = tripDefs.find((def) =>
      def.keywords.some((kw) => trimmed.toLowerCase().startsWith(kw.toLowerCase()))
    );

    if (matchedDef) {
      saveCurrent();
      currentDef = matchedDef;
      paragraphs = [];
      highlights = [];
      inWhyItsSpecial = false;
      continue;
    }

    if (!currentDef) continue;

    if (trimmed.toLowerCase().startsWith("why it's special")) {
      inWhyItsSpecial = true;
      continue;
    }

    if (trimmed.startsWith("✨ Why Choose These Day Trips")) {
      saveCurrent();
      currentDef = null;
      continue;
    }

    if (inWhyItsSpecial) {
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        highlights.push(trimmed.replace(/^[*-]\s*/, "").trim());
      } else if (trimmed.length > 0 && !trimmed.startsWith(" ")) {
        highlights.push(trimmed);
      }
    } else {
      if (
        trimmed.length > 10 &&
        !trimmed.toLowerCase().startsWith("discover the hidden gems") &&
        !trimmed.toLowerCase().startsWith("experience the beauty") &&
        !trimmed.toLowerCase().startsWith("these excursions take you")
      ) {
        paragraphs.push(trimmed);
      }
    }
  }

  saveCurrent();

  return trips;
}
