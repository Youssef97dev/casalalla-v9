import About from "@/components/About";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Activities />
      <Contact />
    </div>
  );
}
