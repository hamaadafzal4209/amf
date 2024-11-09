import AboutUs from "@/components/Home/About";
import KeyFeaturesAndBenefits from "@/components/Home/Benifits";
import ContactSection from "@/components/Home/Contact";
import HeroSection from "@/components/Home/Hero";
import IndustriesServed from "@/components/Home/Industries";
import ProductShowcase from "@/components/Home/Products";
import Services from "@/components/Home/Services";
import { Sponser } from "@/components/Home/Sponsers";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ProductShowcase />
      {/* <IndustriesServed /> */}
      <KeyFeaturesAndBenefits />
      <Services/>
      {/* <Testimonial /> */}
      <Sponser/>
      <ContactSection/>
    </div>
  );
}
