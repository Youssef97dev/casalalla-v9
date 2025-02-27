"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const images = [
  "/images/casa_1.jpg",
  "/images/casa_2.jpg",
  "/images/casa_3.jpg",
  "/images/casa_10.jpg",
  "/images/casa_11.jpg",
  "/images/casa_12.jpg",
];

const Gallery = () => {
  const [isMobile, setIsMobile] = useState("desktop");
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth < 768
          ? "mobile"
          : window.innerWidth < 1024
          ? "tab"
          : "desktop"
      );
    };

    handleResize(); // Check on load
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="relative w-full md:min-h-[75vh] min-h-[55vh] bg-[url('/images/casa_5.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute w-full h-full flex justify-center items-center px-9 md:px-12 lg:px-32">
          <Swiper
            slidesPerView={
              isMobile === "mobile" ? 1 : isMobile === "tab" ? 2 : 3
            }
            spaceBetween={1}
            freeMode={true}
            modules={[FreeMode, Pagination, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-ex1",
              prevEl: ".swiper-button-prev-ex1",
            }}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  height={800}
                  width={800}
                  className="object-cover w-80 h-80 md:w-[22rem] md:h-[22rem] lg:w-[29rem] lg:h-[29rem] rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {isMobile === "desktop" && (
            <>
              <button className="swiper-button-prev-ex1 grid place-content-center left-16 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
                <MdOutlineArrowBackIos size={28} />
              </button>
              <button className="swiper-button-next-ex1 grid place-content-center right-16 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
                <MdOutlineArrowForwardIos size={28} />
              </button>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default Gallery;
