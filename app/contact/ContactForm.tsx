"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const tripParam = searchParams.get("trip");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    trip: tripParam || "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (tripParam) {
      setForm((prev) => ({ ...prev, trip: tripParam }));
    }
  }, [tripParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact Form: ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nTrip Interest: ${form.trip}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:remidmmasy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-brand-slate">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Contact <span className="text-brand-gold">Us</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions or ready to book? We&apos;re here to help plan your perfect adventure.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <AnimatedSection>
                <div className="bg-brand-green rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <a href="mailto:remidmmasy@gmail.com" className="flex items-start gap-3 hover:text-brand-gold transition-colors">
                      <Mail size={20} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-white/60">Email</p>
                        <p className="text-sm font-medium">remidmmasy@gmail.com</p>
                      </div>
                    </a>
                    <a href="tel:+255787873991" className="flex items-start gap-3 hover:text-brand-gold transition-colors">
                      <Phone size={20} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-white/60">Phone</p>
                        <p className="text-sm font-medium">+255 787 873 991</p>
                      </div>
                    </a>
                    <a href="https://wa.me/255755873991" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-brand-gold transition-colors">
                      <MessageCircle size={20} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-white/60">WhatsApp</p>
                        <p className="text-sm font-medium">+255 755 873 991</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-white/60">Location</p>
                        <p className="text-sm font-medium">Arusha, Tanzania</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={20} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-white/60">Response Time</p>
                        <p className="text-sm font-medium">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Quick Links</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Kilimanjaro Routes", href: "/kilimanjaro" },
                      { label: "Mount Meru", href: "/meru" },
                      { label: "Safari Packages", href: "/safaris" },
                      { label: "Day Trips", href: "/day-trips" },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block text-sm text-gray-600 hover:text-brand-green transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for reaching out. We will get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                          <input
                            required
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm outline-none transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm outline-none transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm outline-none transition-colors"
                            placeholder="+255..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Trip Interest</label>
                          <select
                            name="trip"
                            value={form.trip}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm outline-none transition-colors"
                          >
                            <option value="">Select a trip</option>
                            <option value="Kilimanjaro - Machame">Kilimanjaro - Machame Route</option>
                            <option value="Kilimanjaro - Marangu">Kilimanjaro - Marangu Route</option>
                            <option value="Kilimanjaro - Lemosho">Kilimanjaro - Lemosho Route</option>
                            <option value="Kilimanjaro - Rongai">Kilimanjaro - Rongai Route</option>
                            <option value="Kilimanjaro - Umbwe">Kilimanjaro - Umbwe Route</option>
                            <option value="Mount Meru">Mount Meru</option>
                            <option value="Safari">Safari Package</option>
                            <option value="Day Trip">Day Trip</option>
                            <option value="Other">Other / General</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm outline-none resize-none transition-colors"
                          placeholder="Tell us about your dream adventure..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-brand-gold text-brand-green font-bold rounded-xl hover:bg-brand-gold-dark transition-colors shadow-lg"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
