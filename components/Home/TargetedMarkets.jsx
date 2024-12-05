'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TargetedMarkets = () => {
  const markets = [
    "General Contractors",
    "MEP Contractors",
    "Industry",
    "Genset Rental Companies",
    "Large Structure Buildings",
    "Residential Complexes",
    "Residential Compounds",
    "Hospitals",
    "Pump Dealers",
    "Operations & Maintenance Companies",
    "Steel Structure & Steel Construction Companies",
    "Infrastructure Works Companies",
    "Low Current Systems Companies",
    "Building Management Companies",
    "Hatcheries & Food Production Companies",
    "Agriculture & Aqua Groups",
    "System Integrators",
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="container mx-auto px-6 md:px-12 py-16">
      <motion.h2
        className="text-4xl font-extrabold text-center text-main mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Targeted Markets
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-center text-gray-700 mb-12 leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our solutions cater to a diverse range of industries, providing reliable and efficient services tailored to their specific needs.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-6">
        {markets.map((market, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 px-6 py-4 bg-gray-100 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <CheckCircle className="h-6 w-6 text-main flex-shrink-0" />
            <span className="text-gray-800 font-medium">{market}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TargetedMarkets;
