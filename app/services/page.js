import React from "react";
import Services from "@/components/Home/Services";
import HeroBanner from "@/components/HeroBanner";
import MainLayout from "@/components/Layout/MainLayout";

const page = () => {
  return (
    <MainLayout>
      <HeroBanner
        title={"Our Services"}
        subtitle={"Services"}
        backgroundImage={"/assets/service-banner.jpg"}
      />
      <div>
        <Services />
      </div>
    </MainLayout>
  );
};

export default page;
