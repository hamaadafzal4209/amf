"use client";

import AboutUs from "@/components/Home/About";
import Slider from "@/components/Home/AnimatedHero";
import KeyFeaturesAndBenefits from "@/components/Home/Benifits";
import ProductShowcase from "@/components/Home/Products";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import { Sponser } from "@/components/Home/Sponsers";
import TargetedMarkets from "@/components/Home/TargetedMarkets";
import MainLayout from "@/components/Layout/MainLayout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MainLayout>
        <Slider />
        <AboutUs />
        <TargetedMarkets />
        <ProductShowcase slice={true} />
        <Services />
        <Projects />
        <KeyFeaturesAndBenefits />
        <Sponser />
      </MainLayout>
    </div>
  );
}
