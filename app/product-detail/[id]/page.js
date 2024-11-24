"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/Layout/MainLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RelatedProducts from "@/components/RelatedProducts";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (!id) {
      console.error("Product ID is undefined");
      setError("Invalid product ID");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch product with ID ${id}. Status: ${response.status}`
          );
        }
        const data = await response.json();
        setProduct(data.product);
      } catch (err) {
        console.error("Error fetching product data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex); // Ensure correct index is tracked
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <MainLayout>
        <div className="container mx-auto text-center py-16">
          <p>Error: {error || "Product not found."}</p>
          <Button
            onClick={() => window.history.back()}
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

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance directly
              navigation={false}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              modules={[Navigation, Autoplay]}
              onSlideChange={handleSlideChange}
              className="rounded-lg"
            >
              {product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="h-[400px] w-full"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-main transition-all"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              {"<"}
            </div>
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-main transition-all"
              onClick={() => swiperRef.current?.slideNext()}
            >
              {">"}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-semibold text-main mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Key Features:
                </h3>
                <ul className="list-disc list-inside mb-6 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Button
              onClick={() => (window.location.href = "/contact")}
              className="bg-main hover:bg-black text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            >
              Contact Us for More Details
            </Button>
          </div>
        </div>
      </motion.div>

      <RelatedProducts
        currentProductId={product._id}
        currentCategory={product.category}
      />
    </MainLayout>
  );
}
