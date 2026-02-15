import { Navbar, HeroSection } from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
