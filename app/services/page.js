import React from "react";
import Services from "@/components/Home/Services";
import HeroBanner from "@/components/HeroBanner";

const page = () => {
  return (
    <div>
      <HeroBanner
        title={"Our Services"}
        subtitle={"Services"}
        backgroundImage={"/assets/service-banner.jpg"}
      />
      <div className="py-12">
        <Services />
      </div>
    </div>
  );
};

export default page;
