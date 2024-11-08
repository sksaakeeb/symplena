import { Cards } from "./components/Cards";
import { AnimatedTooltipPreview } from "./components/DevelopersSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home({children}) {
  return (
    <div>
      <Header />
      <HeroSection />
      <Cards />
      <AnimatedTooltipPreview />
      {children}
      <Footer />
    </div>
  );
}
