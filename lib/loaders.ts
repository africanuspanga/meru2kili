import fs from "fs";
import path from "path";
import { TripPackage } from "./types";

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

function parseKilimanjaroPackage(raw: string, slug: string): TripPackage {
  const lines = raw.split("\n");
  let title = "";
  let length = "";
  let type = "";
  let difficulty = "";
  let description = "";
  const itinerary: { day: string; title: string; trekkingTime?: string; climaticZone?: string; altitudeGained?: string; description: string }[] = [];
  let inclusions: string[] = [];
  let notes: string[] = [];
  let currentDay: any = null;
  let section: "body" | "inclusions" | "notes" | "itinerary" = "body";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("The ") && line.includes("Route") && !title) {
      title = line.replace(/^#+\s*/, "");
      continue;
    }

    if (line.includes("Length:") && line.includes("|")) {
      const next = lines[i + 1]?.trim();
      if (next && next.includes("|")) {
        length = next.split("|")[1]?.trim() || "";
      }
      continue;
    }
    if (line.includes("Type:") && line.includes("|")) {
      const next = lines[i + 1]?.trim();
      if (next && next.includes("|")) {
        type = next.split("|")[1]?.trim() || "";
      }
      continue;
    }
    if (line.includes("Difficulty:") && line.includes("|")) {
      const next = lines[i + 1]?.trim();
      if (next && next.includes("|")) {
        difficulty = next.split("|")[1]?.trim() || "";
      }
      continue;
    }

    if (line.startsWith("# **Day") || line.startsWith("# **Option Day")) {
      if (currentDay) itinerary.push(currentDay);
      const match = line.match(/# \*\*(Day \d+(?:\/\d+)?|Option Day \d+):\s*(.*?)\*\*/);
      currentDay = {
        day: match?.[1] || "",
        title: match?.[2] || "",
        description: "",
      };
      section = "itinerary";
      continue;
    }

    if (line.startsWith("| Trekking time")) {
      const next = lines[i + 1]?.trim();
      if (next && currentDay) {
        currentDay.trekkingTime = next.split("|")[1]?.trim();
      }
      continue;
    }
    if (line.startsWith("| **Climatic zone")) {
      const next = lines[i + 1]?.trim();
      if (next && currentDay) {
        currentDay.climaticZone = next.split("|")[1]?.trim();
      }
      continue;
    }
    if (line.startsWith("| **Altitude gained")) {
      const next = lines[i + 1]?.trim();
      if (next && currentDay) {
        currentDay.altitudeGained = next.split("|")[1]?.trim();
      }
      continue;
    }

    if (line.includes("Package Consists of:")) {
      if (currentDay) itinerary.push(currentDay);
      currentDay = null;
      section = "inclusions";
      continue;
    }

    if (line.startsWith("**TIPPING:**")) {
      section = "notes";
      notes.push(line.replace(/\*\*/g, ""));
      continue;
    }

    if (line.startsWith("* ") && section === "inclusions") {
      inclusions.push(line.replace(/^\*\s*/, "").replace(/\*$/, "").trim());
      continue;
    }
    if (line.startsWith("* ") && section === "notes") {
      notes.push(line.replace(/^\*\s*/, "").replace(/\*$/, "").trim());
      continue;
    }

    if (section === "itinerary" && currentDay && line && !line.startsWith("|")) {
      currentDay.description += (currentDay.description ? " " : "") + line;
    }
  }

  if (currentDay) itinerary.push(currentDay);

  const routeImages: Record<string, string> = {
    machame: "/Kilimanjaro images/machame-route-map.jpg",
    marangu: "/Kilimanjaro images/marangu-route-map.jpg",
    lemosho: "/Kilimanjaro images/lemosho-route-map.jpg",
    rongai: "/Kilimanjaro images/rongai-route-map.jpg",
    umbwe: "/Kilimanjaro images/umbwe-route.jpg",
  };

  const key = Object.keys(routeImages).find((k) => slug.includes(k)) || "kilimanjaro";

  return {
    slug,
    title,
    category: "kilimanjaro",
    summary: { length, type, difficulty },
    description,
    itinerary,
    inclusions,
    notes,
    image: routeImages[key],
  };
}

function parseSafariPackage(raw: string, slug: string): TripPackage {
  const lines = raw.split("\n");
  const title = lines.find((l) => l.trim().startsWith("**") && l.includes("Days"))?.replace(/\*\*/g, "").trim() || "";

  let inclusions: string[] = [];
  let exclusions: string[] = [];
  let section: "body" | "inclusions" | "exclusions" = "body";

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.includes("Package Inclusions:")) {
      section = "inclusions";
      continue;
    }
    if (trimmed.includes("Package Exclusions:")) {
      section = "exclusions";
      continue;
    }
    if (trimmed.startsWith("* ") && section === "inclusions") {
      inclusions.push(trimmed.replace(/^\*\s*/, ""));
    }
    if (trimmed.startsWith("* ") && section === "exclusions") {
      exclusions.push(trimmed.replace(/^\*\s*/, ""));
    }
  }

  return {
    slug,
    title,
    category: "safari",
    description: raw.replace(/\*\*/g, "").substring(0, 400) + "...",
    inclusions,
    exclusions,
    image: "/Kilimanjaro National Park.jpeg",
  };
}

function parseDayTrips(raw: string): TripPackage[] {
  const trips: TripPackage[] = [];
  const lines = raw.split("\n");
  let current: Partial<TripPackage> | null = null;

  const tripNames = [
    "Marangu Village & Waterfalls",
    "Materuni Waterfalls & Coffee Tour",
    "Napuru Waterfalls",
    "Maji Chemka",
    "Londorosi",
  ];

  for (const line of lines) {
    const trimmed = line.trim();

    if (tripNames.some((t) => trimmed.toLowerCase().includes(t.toLowerCase()))) {
      if (current) trips.push(current as TripPackage);
      const title = tripNames.find((t) => trimmed.toLowerCase().includes(t.toLowerCase())) || trimmed;
      current = {
        slug: title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-"),
        title,
        category: "day-trip",
        description: "",
        inclusions: [],
        image: "/Day Trip.jpeg",
      };
      continue;
    }

    if (current && trimmed && !trimmed.startsWith("Why it's special") && !trimmed.startsWith("✨")) {
      if (!current.description) {
        current.description = trimmed;
      } else if (current.description.length < 500) {
        current.description += " " + trimmed;
      }
    }
  }

  if (current) trips.push(current as TripPackage);

  return trips;
}
