import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import PopularProd from "./components/PopularProd";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularProd />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}
