"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Correct hook
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MainLayout from "@/components/Layout/MainLayout";

export default function ProductDetailPage() {
  const { id } = useParams(); // Get the product ID from the dynamic route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product with ID ${id}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="container mx-auto text-center py-16">
          <p>Loading product details...</p>
        </div>
      </MainLayout>
    );
  }

  if (error || !product) {
    return (
      <MainLayout>
        <div className="container mx-auto text-center py-16">
          <p>Error: {error || "Product not found."}</p>
          <Button
            onClick={() => window.history.back()} // Adjusted navigation
            className="mt-4 bg-main text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Go Back
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <motion.div
        className="container mx-auto px-4 md:px-8 lg:px-12 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          onClick={() => window.history.back()}
          className="mb-8 bg-main text-white hover:bg-black px-6 py-3 rounded-lg shadow-lg"
        >
          Go Back
        </Button>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-main mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{product.description}</p>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features:</h3>
              <ul className="list-disc list-inside mb-6 text-gray-600">
                {product.features?.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={() => window.location.href = "/contact"}
              className="bg-main hover:bg-black text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            >
              Contact Us for More Details
            </Button>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}
