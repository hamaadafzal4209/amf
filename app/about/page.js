import HeroBanner from "@/components/HeroBanner";
import AboutUs from "@/components/Home/About";
import MainLayout from "@/components/Layout/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <HeroBanner
        title={"About"}
        subtitle={"about us"}
        backgroundImage={"/assets/about-banner.jpg"}
      />
      <AboutUs />
    </MainLayout>
  );
};

export default page;
