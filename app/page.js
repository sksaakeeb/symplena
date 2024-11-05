import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home({children}) {
  return (
    <div>
      <Header />
      <HeroSection />
      {children}
      <Footer />
    </div>
  );
}
