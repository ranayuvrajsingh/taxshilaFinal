// ✅ src/pages/Contact.tsx
import { motion } from "framer-motion";
import { useEffect, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from "react";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Example posts data
  const posts = [
    {
      title: "Understanding Income Tax Basics",
      date: "2024-06-01",
      excerpt: "A beginner's guide to understanding the fundamentals of income tax in India.",
    },
    {
      title: "GST Explained: What You Need to Know",
      date: "2024-05-20",
      excerpt: "Everything you need to know about the Goods and Services Tax (GST) and its impact.",
    },
    {
      title: "Tax Saving Investments for 2024",
      date: "2024-05-10",
      excerpt: "Explore the best investment options to save tax in the current financial year.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-orange-900 text-white px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-orange-500 text-center mb-16"
      >
        Taxshila Blog
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-10">
        {posts.map((post: { title: string; date: string; excerpt: string }, idx: Key | null | undefined) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-xl bg-white text-black shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-2 text-orange-600">{post.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{post.date}</p>
            <p className="text-base">{post.excerpt}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
