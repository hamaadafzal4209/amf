import HeroBanner from "@/components/HeroBanner";
import ProductShowcase from "@/components/Home/Products";
import MainLayout from "@/components/Layout/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <HeroBanner
        title={"Our Products"}
        subtitle={"products"}
        backgroundImage={"/assets/products-banner.jpg"}
      />
      <div>
        <ProductShowcase showSearchBar={true} />
      </div>
    </MainLayout>
  );
};

export default page;
