"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/255755873991"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        <div className="relative w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-green-500 hover:scale-110 transition-transform">
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </div>
    </motion.a>
  );
}
