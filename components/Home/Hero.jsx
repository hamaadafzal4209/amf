"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroContents = [
  {
    title: "Cutting-Edge Electronics",
    description: "Discover the latest in tech innovation",
    background: "/assets/banner-1.jpg",
  },
  {
    title: "Smart Home Solutions",
    description: "Transform your living space with IoT devices",
    background:
      "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWMlMjBjaXJjdWl0fGVufDB8fDB8fHww",
  },
  {
    title: "Powerful Gadgets",
    description: "Boost your productivity with our range of gadgets",
    background:
      "https://plus.unsplash.com/premium_photo-1682928136660-8cbeaf4941b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3RyaWMlMjBjaXJjdWl0fGVufDB8fDB8fHww",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroContents[currentIndex].background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: 'fixed'
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        <motion.div
          className="lg:w-1/2 text-white mb-8 lg:mb-0 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-4xl lg:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {heroContents[currentIndex].title}
              </motion.h1>
              <motion.p
                className="text-xl lg:text-2xl mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {heroContents[currentIndex].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.button
            className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-bold"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-white opacity-[3%]"></span>
            <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-main opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Contact Now
            </span>
            <span className="absolute inset-0 rounded-full border-2 border-white hover:border-main"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
