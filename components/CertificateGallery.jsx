'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function CertificateGallery({ certificates }) {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={cert.src}
            alt={cert.alt}
            width={400}
            height={300}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

