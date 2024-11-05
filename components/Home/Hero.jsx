'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const heroContents = [
  {
    title: "Cutting-Edge Electronics",
    description: "Discover the latest in tech innovation",
    image: "https://plus.unsplash.com/premium_photo-1682145728214-dbd62535af3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG93JTIwdm9sdGFnZXxlbnwwfHwwfHx8MA%3D%3D",
    background: "/assets/banner-1.jpg"
  },
  {
    title: "Smart Home Solutions",
    description: "Transform your living space with IoT devices",
    image: "https://images.unsplash.com/photo-1508841710800-0149d3a22a11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvdyUyMHZvbHRhZ2V8ZW58MHx8MHx8fDA%3D",
    background: "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWMlMjBjaXJjdWl0fGVufDB8fDB8fHww" 
  },
  {
    title: "Powerful Gadgets",
    description: "Boost your productivity with our range of gadgets",
    image: "https://images.unsplash.com/photo-1490717550892-b6599dd47aa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxvdyUyMHZvbHRhZ2V8ZW58MHx8MHx8fDA%3D",
    background: "https://plus.unsplash.com/premium_photo-1682928136660-8cbeaf4941b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3RyaWMlMjBjaXJjdWl0fGVufDB8fDB8fHww"
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
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroContents[currentIndex].background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        <motion.div
          className="lg:w-1/2 text-white mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                {heroContents[currentIndex].title}
              </h1>
              <p className="text-xl lg:text-2xl mb-8">
                {heroContents[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Now
          </motion.button>
        </motion.div>
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotateY: -180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 180 }}
              transition={{ duration: 0.5 }}
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
    </section>
  );
}
