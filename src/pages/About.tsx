// ✅ src/pages/About.tsx
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { WavyBackground } from "../components/ui/wavy-background";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

// Sample reasons/team/tooltips
const reasons = [
  {
    id: 1,
    name: "Yuvraj Rana",
    designation: "Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Neha Kapoor",
    designation: "Tax Expert",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Ravi Singh",
    designation: "Loan Advisor",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Wavy Background fixed properly */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        <WavyBackground className="w-full h-full" fill="#ff6f00" />
      </div>

      <section className="relative z-10 px-6 pt-32 pb-24 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-orange-400 text-center mb-12"
        >
          About Taxshila
        </motion.h1>

        {/* Intro Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-lg text-gray-200 leading-relaxed space-y-6"
        >
          <p>
            Taxshila is your trusted partner in legal, taxation, and insurance services. Since 2019,
            we’ve helped thousands simplify tax filing, resolve insurance claims, and correct CIBIL
            scores through expert guidance and personalized care.
          </p>
          <p>
            Our services include ITR Filing, GST Handling, Loan Assistance, Company Formation,
            MSME Registration, NGO Compliance, and more — all under one digital umbrella.
          </p>
          <p>
            Whether you’re a startup, salaried professional, or business owner, our team ensures
            fast, accurate, and transparent service.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {[
            "Taxation Services",
            "Insurance & Claims",
            "Loan Assistance",
            "CIBIL Rectification",
            "Trademark & ISO",
            "Startup & MSME Support",
          ].map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 bg-gradient-to-br from-orange-600 to-yellow-400 text-black shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-sm">
                We offer end-to-end services with guaranteed assistance and expert-backed solutions.
              </p>
            </div>
          ))}
        </motion.div>

        {/* Team Image */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-center"
        >
          <img
            src="https://images.unsplash.com/photo-1620121697502-1c8a821fa6d8?auto=format&fit=crop&w=1280&q=80"
            alt="Taxshila Team"
            className="mx-auto rounded-xl shadow-2xl max-w-4xl w-full"
          />
        </motion.div> */}

        {/* Animated Tooltip (Team Members / Features) */}
        <div className="flex justify-center gap-6 mt-24">
          <AnimatedTooltip items={reasons} />
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-20">
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
