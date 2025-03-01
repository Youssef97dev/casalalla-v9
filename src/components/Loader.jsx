"use client";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Activities from "./Activities";
import Contact from "./Contact";
import Footer from "./Footer";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="w-full flex flex-col">
          <Navbar />
          <Hero />
          <About />
          <Gallery />
          <Activities />
          <Contact />
          <Footer />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <CircleLoader color="#c20022" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
