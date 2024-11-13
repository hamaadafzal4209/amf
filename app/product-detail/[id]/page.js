"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Dummy data for product details
const dummyProduct = {
  id: "1",
  name: "Premium Switchgear",
  description:
    "Our Premium Switchgear provides high-quality, reliable performance and cutting-edge technology for all your electrical needs. It offers robust protection, high-efficiency ratings, and is designed for ease of maintenance.",
  imageUrl: "https://www.essmetron.com/wp-content/uploads/2012/01/UL1558-switchgear.jpg",
  features: [
    "Advanced protection systems",
    "Energy-efficient design",
    "Modular and scalable",
    "Easy to maintain",
    "Durable and reliable"
  ]
};

export default function ProductDetailPage() {
  const router = useRouter();
  const [product] = useState(dummyProduct); // Use dummy data directly

  return (
    <motion.div
      className="container mx-auto px-4 md:px-8 lg:px-12 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <Button
        onClick={() => router.back()}
        className="mb-8 bg-main text-white hover:bg-black px-6 py-3 rounded-lg shadow-lg"
      >
        Go Back
      </Button>

      {/* Product Details Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Product Information */}
        <div>
          {/* Product Title */}
          <h1 className="text-4xl font-semibold text-main mb-4">{product.name}</h1>

          {/* Product Description */}
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{product.description}</p>

          {/* Key Features Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features:</h3>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Contact Us Button */}
          <Link href='/contact'>
          <Button
            className="bg-main hover:bg-black text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            >
            Contact Us for More Details
          </Button>
              </Link>
        </div>
      </div>
    </motion.div>
  );
}
