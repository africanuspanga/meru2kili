"use client";

import { Suspense } from "react";
import ContactForm from "./ContactForm";

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
