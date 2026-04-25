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
    images: [
      {
        url: "https://www.meru2kili.com/Meru2Kili Hero Image.png",
        width: 1200,
        height: 630,
        alt: "Contact Meru2Kili Hiking & Safaris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Meru2Kili | Book Your Tanzanian Adventure",
    description:
      "Get in touch with Meru2Kili to book your Kilimanjaro climb, Mount Meru trek, Tanzania safari, or day trip.",
    images: ["https://www.meru2kili.com/Meru2Kili Hero Image.png"],
  },
};

export default function ContactPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Meru2Kili",
      description:
        "Get in touch with Meru2Kili to book your Kilimanjaro climb, Mount Meru trek, Tanzania safari, or day trip.",
      url: "https://www.meru2kili.com/contact/",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.meru2kili.com/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.meru2kili.com/contact/" },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Suspense fallback={<ContactSkeleton />}>
        <ContactForm />
      </Suspense>
    </>
  );
}

function ContactSkeleton() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="animate-pulse text-brand-green font-semibold">Loading...</div>
    </div>
  );
}
