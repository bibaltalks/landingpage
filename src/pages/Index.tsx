import Navbar from "@/components/sections/Navbar";
import HeroSlider from "@/components/sections/HeroSlider";
import About from "@/components/sections/About";
import Videos from "@/components/sections/Videos";
import Writing from "@/components/sections/Writing";
import Philosophy from "@/components/sections/Philosophy";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSlider />
      <About />
      <Videos />
      <Writing />
      <Philosophy />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
