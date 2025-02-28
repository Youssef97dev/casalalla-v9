"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_7_walijv",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/b2ungbcdzn3ogn0q9wph",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_9_wkt43z",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_10_nogxaq",
];

const imagesMobile = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_13_a8ozgg",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_4_oo2oim",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/wq4bfswckuo0ebocpfhi",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/rx3mzjhhegeuvtkiszdt",
];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on load
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="relative h-screen bg-black">
        {/* Images for Desktop */}
        {!isMobile &&
          images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full "
              />
            </div>
          ))}

        {/* Images for Mobile */}
        {isMobile &&
          imagesMobile.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                height={1000}
                width={500}
                className="object-cover w-full h-screen"
              />
            </div>
          ))}

        {/* Filter */}
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-saturate-150"></div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7 7 7-7"
              />
            </svg>
          </a>
        </div>

        {/* Booking Button */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <Link
            href="/booking"
            className="text-[12px] leading-[16.8px] px-10 py-4 bg-transparent hover:bg-white text-white hover:text-text_color shadow-lg border border-white uppercase transition-all duration-300"
          >
            R e s e r v e r
          </Link>
        </div>
      </div>
    )
  );
};

export default Hero;
