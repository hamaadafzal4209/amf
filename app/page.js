import AboutUs from "@/components/Home/About";
import KeyFeaturesAndBenefits from "@/components/Home/Benifits";
import HeroSection from "@/components/Home/Hero";
import IndustriesServed from "@/components/Home/Industries";
import ProductShowcase from "@/components/Home/Products";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ProductShowcase />
      <IndustriesServed />
      <KeyFeaturesAndBenefits />
      <Testimonial />
    </div>
  );
}
