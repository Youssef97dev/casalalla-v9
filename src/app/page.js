import About from "@/components/About";
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
    </div>
  );
}
