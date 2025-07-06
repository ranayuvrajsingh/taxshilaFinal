"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { WobbleCard } from "../components/ui/wobble-card";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-orange-900 text-white px-6 pt-32 pb-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-orange-500 text-center mb-16"
      >
        Contact Us
      </motion.h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8">
        {/* Address */}
        <WobbleCard containerClassName="min-h-[250px] bg-orange-700/90">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <HiOutlineLocationMarker size={28} className="text-white" />
              <h3 className="text-2xl font-bold text-white">Address</h3>
            </div>
            <p className="text-gray-200">
              Ramnagar Danda, Near Govt Hospital,<br />
              Thano, Dehradun – 248143,<br />
              Uttarakhand, India
            </p>
          </div>
        </WobbleCard>

        {/* Phone */}
        <a
          href="tel:+919258497676"
          className="w-full block"
          rel="noopener noreferrer"
        >
          <WobbleCard containerClassName="min-h-[250px] bg-zinc-800 hover:bg-zinc-700 transition">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <HiOutlinePhone size={28} className="text-white" />
                <h3 className="text-2xl font-bold text-white">Phone</h3>
              </div>
              <p className="text-gray-300 underline">+91 92584 97676</p>
            </div>
          </WobbleCard>
        </a>

        {/* Email */}
        <a
          href="mailto:support@taxshila.com"
          className="w-full block"
          rel="noopener noreferrer"
        >
          <WobbleCard containerClassName="min-h-[250px] bg-orange-600/90 hover:bg-orange-500 transition">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <HiOutlineMail size={28} className="text-white" />
                <h3 className="text-2xl font-bold text-white">Email</h3>
              </div>
              <p className="text-gray-200 underline">
                support@taxshila.com
              </p>
            </div>
          </WobbleCard>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919258497676"
          className="w-full block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WobbleCard containerClassName="min-h-[250px] bg-green-800 hover:bg-green-700 transition">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FaWhatsapp size={28} className="text-white" />
                <h3 className="text-2xl font-bold text-white">WhatsApp</h3>
              </div>
              <p className="text-gray-300 underline">Chat Now</p>
            </div>
          </WobbleCard>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/tax_shila/"
          className="w-full block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WobbleCard containerClassName="min-h-[250px] bg-pink-700 hover:bg-pink-600 transition">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FaInstagram size={28} className="text-white" />
                <h3 className="text-2xl font-bold text-white">Instagram</h3>
              </div>
              <p className="text-gray-300 underline">@tax_shila</p>
            </div>
          </WobbleCard>
        </a>
      </div>
    </main>
  );
}
