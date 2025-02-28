"use client";
import React, { useState, useEffect } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";
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
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_8_crsxvk",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_8_crsxvk",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/yntqxtyrr6twlbnk7fma",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/yntqxtyrr6twlbnk7fma",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/j29rwwjluxdhjs1sdufo",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/j29rwwjluxdhjs1sdufo",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/aeuldjydltg3zgisujem",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/aeuldjydltg3zgisujem",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/akkjaul1qfiskaqrg507",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/akkjaul1qfiskaqrg507",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/x7ugtlvtbdmnttlimlpg",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/x7ugtlvtbdmnttlimlpg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/pmztmaraj71g4g4xicbe",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/pmztmaraj71g4g4xicbe",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/ygvykfxjvir2dtkfdiie",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/ygvykfxjvir2dtkfdiie",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/pjdoqvpfbeuldq96mewg",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/pjdoqvpfbeuldq96mewg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/c_crop,g_south,h_4240,w_4160/casalalla-v2/nczsxh4f2gndgy2h6uqt",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_crop,g_south,h_4240,w_4160/casalalla-v2/nczsxh4f2gndgy2h6uqt",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_11_lkfatp",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/casa_11_lkfatp",
  },
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
      <div
        id="gallery"
        className="relative w-full md:min-h-[75vh] min-h-[55vh] bg-[url('https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/p0tmas5drbxexrnxffzo')] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail]}
          elementClassNames="absolute w-full h-full flex justify-center items-center px-9 md:px-12 lg:px-32"
        >
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
            className=""
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Link href={image.thumbnail}>
                  <Image
                    src={image.src}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="object-cover w-80 h-80 md:w-[22rem] md:h-[22rem] lg:w-[29rem] lg:h-[29rem] rounded-md"
                    alt={`Casa lalla takerkoust ${index}`}
                  />
                </Link>
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
        </LightGallery>
      </div>
    )
  );
};

export default Gallery;
