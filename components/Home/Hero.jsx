"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroContents = [
  {
    title: "Cutting-Edge Electronics",
    description: "Discover the latest in tech innovation",
    image:
      "https://plus.unsplash.com/premium_photo-1682145728214-dbd62535af3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG93JTIwdm9sdGFnZXxlbnwwfHwwfHx8MA%3D%3D",
    background: "/assets/banner-1.jpg",
  },
  {
    title: "Smart Home Solutions",
    description: "Transform your living space with IoT devices",
    image:
      "https://images.unsplash.com/photo-1508841710800-0149d3a22a11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvdyUyMHZvbHRhZ2V8ZW58MHx8MHx8fDA%3D",
    background:
      "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWMlMjBjaXJjdWl0fGVufDB8fDB8fHww",
  },
  {
    title: "Powerful Gadgets",
    description: "Boost your productivity with our range of gadgets",
    image:
      "https://images.unsplash.com/photo-1490717550892-b6599dd47aa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxvdyUyMHZvbHRhZ2V8ZW58MHx8MHx8fDA%3D",
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
            href="#_"
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-main transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-main group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-main"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Contact Now
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotateY: -180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden mask-effect" // Add a mask-effect class for styling
            >
              <Image
                src={heroContents[currentIndex].image}
                alt="Electronics Hero"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx>{`
        .mask-effect {
          mask-image: radial-gradient(circle, white 60%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle, white 60%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
