import ContactSection from "../Home/Contact";
import Footer from "./Footer";
import Navbar from "./Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ContactSection />
      <Footer />
    </>
  );
};

export default MainLayout;
