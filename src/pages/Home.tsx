// ✅ src/pages/Home.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { WavyBackground } from "../components/ui/wavy-background";
import { IconHome } from "@tabler/icons-react";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540",
  },
];

const dockLinks = [
  {
    title: "Home",
    icon: <IconHome className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />,
    href: "#home",
  },
  {
    title: "Instagram",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
        alt="Instagram"
        className="h-6 w-6"
      />
    ),
    href: "https://www.instagram.com/tax_shila",
  },
  {
    title: "WhatsApp",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="h-6 w-6"
      />
    ),
    href: "https://wa.me/919760091133",
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-white overflow-hidden" id="home">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <WavyBackground className="w-full h-full opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 bg-black/70 backdrop-blur-sm">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center px-6 py-24">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold text-orange-500 mb-4 drop-shadow-lg"
          >
            Welcome to Taxshila
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg max-w-xl text-gray-300 mb-8"
          >
            Empowering individuals and businesses with smart tax solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <Link
              to="/services"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-xl transition duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </section>

        {/* Cards + Instagram Video Section */}
        <section className="px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 text-center mb-8">
            What We Offer
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side Cards */}
            <div className="space-y-6">
              {["Income Tax Filing", "GST Solutions", "Digital Signature", "Loan Assistance"].map(
                (title, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl bg-gradient-to-br from-orange-600 to-yellow-500 text-black shadow-2xl"
                  >
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-sm">
                      Tailored services designed to meet all your business and financial needs.
                    </p>
                  </div>
                )
              )}
            </div>

            {/* Right Side Instagram Reel */}
            <div className="flex justify-end">
              <div className="w-full h-[490px] rounded-xl overflow-hidden shadow-xl">
                <video
                  className="w-full h-full object-contain rounded-xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                >
                  <source src="/Video-839.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 text-center bg-black">
          <h2 className="text-4xl font-bold text-orange-400 mb-8">Success Stories</h2>
          <AnimatedTestimonials testimonials={testimonials} />
        </section>
      </div>
    </main>
  );
}
