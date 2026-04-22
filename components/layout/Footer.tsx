"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Kilimanjaro Routes", href: "/kilimanjaro" },
    { label: "Mount Meru", href: "/meru" },
    { label: "Safaris", href: "/safaris" },
    { label: "Day Trips", href: "/day-trips" },
    { label: "Contact", href: "/contact" },
  ];

  const paymentLogos = [
    { src: "/payment logos copy/visa-logo.png", alt: "Visa" },
    { src: "/payment logos copy/Mastercard-logo.svg", alt: "Mastercard" },
    { src: "/payment logos copy/PayPal.webp", alt: "PayPal" },
    { src: "/payment logos copy/pesapal-logo.png", alt: "Pesapal" },
    { src: "/payment logos copy/M-pesa-logo-removebg-preview copy.png", alt: "M-Pesa" },
    { src: "/payment logos copy/airtel-money-logo copy.png", alt: "Airtel Money" },
    { src: "/payment logos copy/mixx-by-yass-tigo-pesa-400x300 copy.png", alt: "Tigo Pesa" },
    { src: "/payment logos copy/unionpay-logo.png", alt: "UnionPay" },
  ];

  return (
    <footer className="bg-brand-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Image
              src="/Meru2Kili footer logo.png"
              alt="Meru2Kili"
              width={180}
              height={60}
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Expert-guided climbs of Mount Kilimanjaro and Mount Meru, plus unforgettable Tanzania safaris and day trips. Your adventure starts here.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:remidmmasy@gmail.com"
                  className="flex items-start gap-2 text-sm text-gray-300 hover:text-brand-gold transition-colors"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  remidmmasy@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+255787873991"
                  className="flex items-start gap-2 text-sm text-gray-300 hover:text-brand-gold transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  +255 787 873 991
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/255755873991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-gray-300 hover:text-brand-gold transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  WhatsApp: +255 755 873 991
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Arusha, Tanzania
              </li>
            </ul>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-4">We Accept</h4>
            <div className="flex flex-wrap gap-2">
              {paymentLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="bg-white rounded-md px-2 py-1.5 flex items-center justify-center h-8"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={40}
                    height={24}
                    className="h-5 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Meru2Kili Hiking & Safaris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
