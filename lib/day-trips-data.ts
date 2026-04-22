export interface DayTrip {
  slug: string;
  title: string;
  tag: string;
  tagColor: string;
  image: string;
  description: string;
  highlights: string[];
}

export const dayTrips: DayTrip[] = [
  {
    slug: "marangu-village-waterfalls",
    title: "Marangu Village & Waterfalls",
    tag: "Culture & Nature",
    tagColor: "bg-green-100 text-green-700",
    image: "/day trips images/marangu day trip.jpeg",
    description:
      "Explore the famous village at the foothills of Kilimanjaro. Walk through lush green landscapes to hidden waterfalls, visit historic Chagga caves used during tribal wars, and experience authentic village life with coffee and banana farm tours.",
    highlights: [
      "Easy scenic hike through rainforest trails",
      "Visit Kinukamori & Ndoro waterfalls",
      "Explore historic Chagga caves",
      "Swim in natural waterfall pools",
    ],
  },
  {
    slug: "materuni-waterfalls-coffee-tour",
    title: "Materuni Waterfalls & Coffee Tour",
    tag: "Waterfall & Coffee",
    tagColor: "bg-blue-100 text-blue-700",
    image: "/day trips images/materuni day trip.jpeg",
    description:
      "Trek to one of the tallest waterfalls on Kilimanjaro's slopes, cascading 80 meters into a crystal-clear pool. Then join a local Chagga family for a hands-on coffee tour — from bean to cup — with tastings of fresh Arabica coffee.",
    highlights: [
      "80m waterfall with natural swimming pool",
      "Scenic hike through coffee plantations",
      "Traditional coffee-making experience",
      "Panoramic views of Kilimanjaro",
    ],
  },
  {
    slug: "napuru-waterfalls",
    title: "Napuru Waterfalls",
    tag: "Hidden Gem",
    tagColor: "bg-emerald-100 text-emerald-700",
    image: "/day trips images/napuru.jpeg",
    description:
      "Discover a peaceful off-the-beaten-path waterfall near Arusha. Hike through montane forest alive with birdsong, cross rocky streams, and enjoy the tranquility of this lesser-known natural treasure.",
    highlights: [
      "Quiet, uncrowded nature escape",
      "Forest hike with birdwatching",
      "Swim beneath the cascading falls",
      "Perfect for photographers",
    ],
  },
  {
    slug: "maji-chemka-hot-springs",
    title: "Maji Chemka (Kikuletwa Hot Springs)",
    tag: "Hot Springs",
    tagColor: "bg-cyan-100 text-cyan-700",
    image: "/day trips images/maji chemka.jpeg",
    description:
      "Relax in a stunning natural oasis with crystal-clear turquoise water fed by Kilimanjaro's underground springs. Surrounded by palm and fig trees, this hidden paradise offers swimming, rope swings, and a natural fish spa.",
    highlights: [
      "Crystal-clear turquoise swimming water",
      "Rope swing & cliff jumps",
      "Natural fish spa experience",
      "Tropical oasis in the savannah",
    ],
  },
  {
    slug: "londorosi-forest-shira",
    title: "Londorosi (Forest & Shira Plateau)",
    tag: "Forest & Wildlife",
    tagColor: "bg-amber-100 text-amber-700",
    image: "/day trips images/Londorosi.jpeg",
    description:
      "Experience Kilimanjaro's wild western side. Drive through rainforest to Londorosi Gate, then hike onto the vast Shira Plateau at 3,400m for breathtaking views of Kibo peak and encounters with colobus monkeys.",
    highlights: [
      "Hike on the Shira Plateau (3,400m)",
      "Spot colobus monkeys & exotic birds",
      "Panoramic views of Kibo summit",
      "Explore ancient volcanic landscapes",
    ],
  },
];
