// ✅ src/pages/Services.tsx
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { WavyBackground } from "../components/ui/wavy-background";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Income Tax Filing",
      description:
        "Expert guidance to help individuals and businesses file accurate and timely income tax returns.",
    },
    {
      title: "GST Registration & Cases",
      description:
        "Comprehensive GST services including registration, filing, and compliance consulting. We also handle GST-related legal matters.",
    },
    {
      title: "Company Formation & Startup India Reg.",
      description:
        "Start your business with our fast and affordable company registration services and get registered under Startup India.",
    },
    {
      title: "MSME / NGO / ISO Registration",
      description:
        "We offer complete support for MSME registration, NGO registration and ISO certifications.",
    },
    {
      title: "Insurance Services",
      description:
        "Get Life, Health, and Motor Insurance with guaranteed claim support handled by experts.",
    },
    {
      title: "Accounting, PF & ESIC",
      description:
        "Maintain error-free books with our accounting services. We also manage PF and ESIC compliance.",
    },
    {
      title: "Trademark & Legal Consulting",
      description:
        "Protect your brand with trademark registration. Legal drafting and consulting available.",
    },
    {
      title: "Loan Services",
      description:
        "Best rates & complete guidance for Personal, Home, Business, and LAP loans. We also handle bank transfers with low interest.",
    },
    {
      title: "CIBIL Rectification",
      description:
        "Correct errors, boost credit scores, and secure better loan terms with our expert credit repair services.",
    },
  ];

  const reasons = [
    {
      id: 1,
      name: "Expert Professionals",
      designation: "Skilled CA & Tax Experts",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Affordable Pricing",
      designation: "Great value plans",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Timely Delivery",
      designation: "Always on schedule",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <main className="relative min-h-screen text-white bg-[#0d0d0d] overflow-hidden">
      {/* Wavy Background */}
      <div className="absolute inset-0 z-0">
        <WavyBackground className="w-full h-full opacity-40" />
      </div>

      {/* Foreground Content on a matte black overlay */}
      <div className="relative z-10 bg-black/70 backdrop-blur-sm min-h-screen pb-20">
        <div className="flex justify-center gap-6 mb-8 px-6 pt-10">
          {["💼", "📊", "🏦", "🧾", "💳", "⚖️"].map((emoji, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="text-3xl animate-float drop-shadow-md"
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-orange-500 text-center mb-16 mt-10"
        >
          What We Offer
        </motion.h1>

        <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 px-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-orange-600 to-yellow-500 text-black"
            >
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-24 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-orange-400 text-center mb-8"
          >
            Why Choose TAXshila?
          </motion.h2>
          <div className="flex justify-center gap-6">
            <AnimatedTooltip items={reasons} />
          </div>
        </div>

        <div className="text-center mt-20">
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
