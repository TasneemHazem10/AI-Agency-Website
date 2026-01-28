import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}