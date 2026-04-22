import { Testimonial, GalleryImage, NavItem } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "USA",
    text: "Remid and his team made our Kilimanjaro dream come true. The attention to safety, the delicious food, and the incredible guides made this a once-in-a-lifetime experience.",
    rating: 5,
  },
  {
    id: "2",
    name: "Markus Schmidt",
    location: "Germany",
    text: "We chose the Lemosho route and every day was perfectly organized. The porters were amazing and the summit sunrise was unforgettable. Highly recommend Meru2Kili!",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Chen",
    location: "Australia",
    text: "The safari was incredible! We saw the Big 5 in just 3 days. Remid's knowledge of wildlife and the parks made the experience so much richer.",
    rating: 5,
  },
  {
    id: "4",
    name: "James & Rebecca",
    location: "UK",
    text: "From booking to summit, everything was seamless. The pre-climb briefing and gear check gave us confidence. Thank you for an amazing adventure!",
    rating: 5,
  },
  {
    id: "5",
    name: "Hans de Vries",
    location: "Netherlands",
    text: "Mount Meru was the perfect warm-up for Kilimanjaro. The views from Socialist Peak are stunning. Professional team, great equipment, fair prices.",
    rating: 5,
  },
  {
    id: "6",
    name: "Priya Sharma",
    location: "India",
    text: "The Materuni waterfall and coffee tour was the highlight of our Tanzania trip. Authentic, beautiful, and so well organized. Don't miss it!",
    rating: 5,
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "/climbing.jpeg", alt: "Climbing Kilimanjaro" },
  { src: "/Climb begins.jpeg", alt: "The climb begins" },
  { src: "/climb rest.jpeg", alt: "Resting during the climb" },
  { src: "/The climb.jpeg", alt: "Trekking on the mountain" },
  { src: "/The climbinggg.jpeg", alt: "Mountain climbing" },
  { src: "/The snow climb.jpeg", alt: "Snow climbing" },
  { src: "/Lava Tower camp.jpeg", alt: "Lava Tower Camp" },
  { src: "/Shira Camp.jpeg", alt: "Shira Camp" },
  { src: "/Lemosho Gate.jpeg", alt: "Lemosho Gate" },
  { src: "/The lemosho gate.jpeg", alt: "At Lemosho Gate" },
  { src: "/Morum Peak site.jpeg", alt: "Morum Peak" },
  { src: "/Uhuru Peak 1.jpeg", alt: "Uhuru Peak" },
  { src: "/Uhuru peak 2.jpeg", alt: "Summit of Kilimanjaro" },
  { src: "/Uhuru Peak 3.jpeg", alt: "At the top of Africa" },
  { src: "/Kilimanjaro National Park.jpeg", alt: "Kilimanjaro National Park" },
  { src: "/About section.jpeg", alt: "About Meru2Kili" },
  { src: "/About Founder.jpeg", alt: "Founder Remid Mmasy" },
  { src: "/Day Trip.jpeg", alt: "Day trip adventure" },
  { src: "/Day trip 3.jpeg", alt: "Exploring Tanzania" },
  { src: "/About page.jpeg", alt: "About our company" },
];

export const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "KILIMANJARO", href: "/kilimanjaro" },
  { label: "MERU", href: "/meru" },
  {
    label: "SAFARIS",
    href: "#",
    children: [
      { label: "Safaris", href: "/safaris" },
      { label: "Day Trips", href: "/day-trips" },
    ],
  },
  { label: "CONTACT", href: "/contact" },
];
