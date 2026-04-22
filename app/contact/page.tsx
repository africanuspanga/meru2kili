import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Meru2Kili to book your Kilimanjaro climb, Mount Meru trek, Tanzania safari, or day trip. Email, phone, and WhatsApp available.",
  alternates: {
    canonical: "https://www.meru2kili.com/contact/",
  },
  openGraph: {
    title: "Contact Meru2Kili | Book Your Tanzanian Adventure",
    description:
      "Get in touch with Meru2Kili to book your Kilimanjaro climb, Mount Meru trek, Tanzania safari, or day trip.",
    url: "https://www.meru2kili.com/contact/",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactSkeleton />}>
      <ContactForm />
    </Suspense>
  );
}

function ContactSkeleton() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="animate-pulse text-brand-green font-semibold">Loading...</div>
    </div>
  );
}
