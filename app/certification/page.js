'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroBanner from "@/components/HeroBanner"
import MainLayout from "@/components/Layout/MainLayout"
import { CertificateGallery } from "@/components/CertificateGallery"

const certificateCategories = {
  ISO: [
    { src: "/assets/certificates/iso-1.jpg", alt: "ISO Certificate 1" },
    { src: "/assets/certificates/iso-2.jpg", alt: "ISO Certificate 2" },
    { src: "/assets/certificates/iso-3.jpg", alt: "ISO Certificate 3" },
  ],
  ASO: [
    { src: "/assets/certificates/aso-1.jpg", alt: "ASO Certificate 1" },
    { src: "/assets/certificates/aso-2.jpg", alt: "ASO Certificate 2" },
    { src: "/assets/certificates/aso-3.jpg", alt: "ASO Certificate 3" },
    { src: "/assets/certificates/aso-4.jpg", alt: "ASO Certificate 4" },
  ],
}

export default function CertificationPage() {
  const [activeTab, setActiveTab] = useState("ISO")

  return (
    <MainLayout>
      <HeroBanner
        title="Certification"
        backgroundImage="/assets/certification-banner.jpg"
        subtitle="Our Commitment to Excellence"
      />
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Certifications
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto text-lg text-gray-600 text-center leading-relaxed mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Almaram Alfaneyah is proud to hold certifications from industry leaders including Schneider Electric, ABB, Rittal, Rolaco, L&T, and EPLAN.
        </motion.p>

        <div className="flex justify-center space-x-4 mb-12">
          {Object.keys(certificateCategories).map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-2 text-lg font-medium rounded-full transition-all duration-200 ${
                activeTab === category
                  ? "bg-main text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <CertificateGallery certificates={certificateCategories[activeTab]} />
          </motion.div>
        </AnimatePresence>
      </section>
    </MainLayout>
  )
}

