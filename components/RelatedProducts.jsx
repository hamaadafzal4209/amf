"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchProducts } from "@/lib/productsSlice";

export default function RelatedProducts({ currentProductId, currentCategory }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0 && !loading) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products, loading]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(
        (product) =>
          product.category === currentCategory &&
          product._id !== currentProductId
      );
      setRelatedProducts(filteredProducts.slice(0, 4));
    }
  }, [products, currentCategory, currentProductId]);

  const handleLearnMoreClick = (productId) => {
    router.push(`/product-detail/${productId}`);
  };

  if (loading) {
    return <div className="text-center py-8">Loading related products...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        Failed to load related products: {error}
      </div>
    );
  }

  if (relatedProducts.length === 0) {
    return <div className="text-center py-8">No related products found.</div>;
  }

  return (
    <div className="related-products container mx-auto px-4 md:px-8 lg:px-12 pb-12 md:pb-20">
      <h3 className="text-2xl font-bold mb-6 text-center text-main">
        Related Products
      </h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProducts.map((product) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              style={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
              className="h-full flex flex-col border border-gray-200 hover:shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-main">{product.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="h-40">
                {product.images.length > 0 && (
                  <Image
                    width={1000}
                    height={1000}
                    src={product.images[0]}
                    alt={product.title}
                    className="transition-transform duration-500 h-full ease-in-out object-cover transform hover:scale-105"
                  />
                )}
              </CardContent>
              <CardFooter className="mt-4">
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
    </div>
  );
}
