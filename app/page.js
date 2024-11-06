import AboutUs from "@/components/Home/About";
import HeroSection from "@/components/Home/Hero";
import ProductShowcase from "@/components/Home/Products";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ProductShowcase />
    </div>
  );
}
