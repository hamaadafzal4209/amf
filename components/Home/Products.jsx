"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Cross, X } from "lucide-react";

const categories = [
  {
    id: "mdb",
    name: "Main Distribution Boards",
    products: [
      {
        id: "mdb-1",
        name: "PowerMax MDB",
        description:
          "High-capacity main distribution board for industrial applications.",
        imageUrl:
          "https://www.tsca.com.ph/wp-content/uploads/2021/05/Low-Voltage-Switchgear.jpg",
        features: [
          "Up to 6300A",
          "IP54 Protection",
          "Modular Design",
          "Arc Flash Resistant",
        ],
      },
      {
        id: "mdb-2",
        name: "CompactPro MDB",
        description:
          "Space-saving main distribution board for commercial buildings.",
        imageUrl:
          "https://www.tsca.com.ph/wp-content/uploads/2021/05/Low-Voltage-Switchgear.jpg",
        features: [
          "Up to 4000A",
          "IP42 Protection",
          "Front Access",
          "Energy Monitoring",
        ],
      },
    ],
  },
  {
    id: "mcc",
    name: "Motor Control Centers",
    products: [
      {
        id: "mcc-1",
        name: "SmartDrive MCC",
        description:
          "Intelligent motor control center with advanced monitoring capabilities.",
        imageUrl:
          "https://www.tsca.com.ph/wp-content/uploads/2021/05/Low-Voltage-Switchgear.jpg",
        features: [
          "Smart Diagnostics",
          "Remote Monitoring",
          "Plug-in Units",
          "Arc Resistant",
        ],
      },
      {
        id: "mcc-2",
        name: "CompactControl MCC",
        description:
          "Space-efficient motor control center for small to medium industries.",
        imageUrl:
          "https://www.tsca.com.ph/wp-content/uploads/2021/05/Low-Voltage-Switchgear.jpg",
        features: [
          "Compact Design",
          "Integrated PLC",
          "Quick Installation",
          "Energy Efficient",
        ],
      },
    ],
  },
  {
    id: "pb",
    name: "Panel Boards",
    products: [
      {
        id: "pb-1",
        name: "FlexiPanel",
        description:
          "Versatile panel board suitable for various commercial and light industrial applications.",
        imageUrl:
          "https://www.tsca.com.ph/wp-content/uploads/2021/05/Low-Voltage-Switchgear.jpg",
        features: [
          "Customizable",
          "Easy Expansion",
          "NEMA 1 or 3R Enclosure",
          "Circuit Monitoring",
        ],
      },
      {
        id: "pb-2",
        name: "SafeGuard Panel",
        description:
          "High-safety panel board designed for critical environments.",
        imageUrl:
          "https://www.tsca.com.ph/wp-content/uploads/2021/05/Low-Voltage-Switchgear.jpg",
        features: [
          "Finger-Safe Design",
          "Surge Protection",
          "EMI Shielding",
          "Thermal Management",
        ],
      },
    ],
  },
];

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedTab, setSelectedTab] = useState(categories[0].id);

  const handleTabClick = (categoryId) => {
    setSelectedTab(categoryId);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 pb-16">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Switchgear Products
      </motion.h2>

      <div className="flex space-x-4 mb-8 overflow-x-auto no-scrollbar">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => handleTabClick(category.id)}
            className={`px-4 py-2 text-base font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white ${
              selectedTab === category.id
                ? "bg-main text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {categories.map(
          (category) =>
            selectedTab === category.id && (
              <div
                key={category.id}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {category.products.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="relative h-48 mb-4">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, index) => (
                            <Badge key={index} variant="secondary">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="bg-main hover:bg-black text-white"
                          onClick={() => setSelectedProduct(product)}
                        >
                          Learn More
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg p-6 max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
                <X
                  className="cursor-pointer"
                  onClick={() => setSelectedProduct(null)}
                />
              </div>
              <div className="relative h-64 mb-4">
                <Image
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="mb-4">{selectedProduct.description}</p>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside mb-4">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Button
                className="bg-main text-white hover:bg-black"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
