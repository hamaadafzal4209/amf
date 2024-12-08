"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import { fetchProducts } from "@/lib/productsSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductShowcase({
  slice = false,
  showSearchBar = false,
}) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  const [categories, setCategories] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filteredProducts, setFilteredProducts] = useState(products); // Filtered products state

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products?.length > 0) {
      const categorizedProducts = products.reduce((acc, product) => {
        if (product.category) {
          acc[product.category] = acc[product.category] || [];
          acc[product.category].push(product);
        }
        return acc;
      }, {});

      const categoryArray = Object.entries(categorizedProducts).map(
        ([key, value]) => ({
          id: key,
          name: key,
          products: value,
        })
      );

      setCategories(categoryArray);
      setSelectedTab(categoryArray[0]?.id || "");
    }
  }, [products]);

  useEffect(() => {
    if (searchTerm) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(lowercasedSearchTerm) ||
          product.description.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products when search is cleared
    }
  }, [searchTerm, products]);

  const handleTabClick = (categoryId) => setSelectedTab(categoryId);

  const handleLearnMoreClick = (productId) =>
    router.push(`/product-detail/${productId}`);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-16">
        Failed to load products: {error}
      </div>
    );
  }

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

      {showSearchBar && (
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
          />
        </div>
      )}

      {/* Category Tabs */}
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

      <div>
        {categories.map(
          (category) =>
            selectedTab === category.id && (
              <div
                key={category.id}
                className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              >
                {(slice ? category.products.slice(0, 3) : category.products)
                  .filter((product) => filteredProducts.includes(product))
                  .map((product) => (
                    <motion.div
                      key={product._id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full flex flex-col border border-gray-200 hover:shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-1 hover:border-b-8 hover:border-b-main">
                        <CardHeader>
                          <CardTitle className="text-main">
                            {product.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="h-48">
                          <Swiper
                            navigation={false}
                            autoplay={
                              product.images.length > 1
                                ? { delay: 3000, disableOnInteraction: false }
                                : false
                            }
                            loop={product.images.length > 1}
                            modules={[Autoplay]}
                            className="rounded-lg h-full"
                          >
                            {product.images.map((image, index) => (
                              <SwiperSlide key={index}>
                                <div
                                  className="h-full w-full bg-center bg-cover"
                                  style={{
                                    backgroundImage: `url(${image})`,
                                  }}
                                ></div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
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

      {/* Message when no products are found */}
      {filteredProducts.length === 0 && searchTerm && (
        <div className="text-center text-gray-500 py-8">
          No products found for <q>{searchTerm}</q>
        </div>
      )}
    </div>
  );
}
