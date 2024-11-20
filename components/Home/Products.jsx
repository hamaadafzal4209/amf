"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImageSlider from "./ImageSlider";
import Image from "next/image";

export default function ProductShowcase() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products/allProducts");
        const data = await response.json();

        setProducts(data.products);

        // Categorize products by category
        const categorizedProducts = {};
        data.products.forEach((product) => {
          const category = product.category;
          if (category) {
            if (!categorizedProducts[category]) {
              categorizedProducts[category] = [];
            }
            categorizedProducts[category].push(product);
          }
        });

        const categoryArray = Object.keys(categorizedProducts).map((key) => ({
          id: key,
          name: key,
          products: categorizedProducts[key],
        }));

        setCategories(categoryArray);
        setSelectedTab(categoryArray[0]?.id || "");
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const handleTabClick = (categoryId) => {
    setSelectedTab(categoryId);
  };

  const handleLearnMoreClick = (productId) => {
    router.push(`/product-detail/${productId}`);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 pb-16">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-main"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Switchgear Products
      </motion.h2>

      {/* Tabs for categories */}
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

      {/* Products display */}
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
                    key={product._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="text-main">
                          {product.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        {product.images.length > 1 ? (
                          <ImageSlider slides={product.images} />
                        ) : (
                          <Image
                            width={500}
                            height={500}
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-48 rounded-md object-cover"
                          />
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="bg-main hover:bg-black text-white"
                          onClick={() => handleLearnMoreClick(product._id)}
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
    </div>
  );
}
