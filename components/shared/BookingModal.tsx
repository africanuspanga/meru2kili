"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Mail, Phone, User, MessageSquare } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tripName?: string;
}

export default function BookingModal({ isOpen, onClose, tripName = "" }: BookingModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    people: "",
    message: "",
    trip: tripName,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Booking Inquiry: ${form.trip || "General"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPreferred Date: ${form.date}\nNumber of People: ${form.people}\nTrip: ${form.trip}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:remidmmasy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between bg-brand-green px-6 py-4 rounded-t-2xl">
              <h3 className="text-lg font-bold text-white">Book Your Adventure</h3>
              <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Inquiry Sent!</h4>
                  <p className="text-gray-600">Thank you! We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Trip</label>
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                      <MessageSquare size={16} className="text-brand-green" />
                      <input
                        type="text"
                        name="trip"
                        value={form.trip}
                        onChange={handleChange}
                        className="flex-1 bg-transparent text-sm outline-none"
                        placeholder="Select a trip"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 focus-within:border-brand-green focus-within:ring-1 focus-within:ring-brand-green">
                        <User size={16} className="text-gray-400" />
                        <input
                          required
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="flex-1 bg-transparent text-sm outline-none"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 focus-within:border-brand-green focus-within:ring-1 focus-within:ring-brand-green">
                        <Mail size={16} className="text-gray-400" />
                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="flex-1 bg-transparent text-sm outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 focus-within:border-brand-green focus-within:ring-1 focus-within:ring-brand-green">
                        <Phone size={16} className="text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="flex-1 bg-transparent text-sm outline-none"
                          placeholder="+255..."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 focus-within:border-brand-green focus-within:ring-1 focus-within:ring-brand-green">
                        <Calendar size={16} className="text-gray-400" />
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          className="flex-1 bg-transparent text-sm outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 focus-within:border-brand-green focus-within:ring-1 focus-within:ring-brand-green">
                      <Users size={16} className="text-gray-400" />
                      <select
                        name="people"
                        value={form.people}
                        onChange={handleChange}
                        className="flex-1 bg-transparent text-sm outline-none"
                      >
                        <option value="">Select</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3-5">3-5 People</option>
                        <option value="6-10">6-10 People</option>
                        <option value="10+">10+ People</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm outline-none resize-none"
                      placeholder="Any special requests or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-brand-gold text-brand-green font-bold rounded-xl hover:bg-brand-gold-dark transition-colors shadow-lg"
                  >
                    Send Booking Inquiry
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    You can also reach us directly at{" "}
                    <a href="mailto:remidmmasy@gmail.com" className="text-brand-green underline">
                      remidmmasy@gmail.com
                    </a>{" "}
                    or{" "}
                    <a href="tel:+255787873991" className="text-brand-green underline">
                      +255 787 873 991
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
