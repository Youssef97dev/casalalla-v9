import Image from "next/image";
import Link from "next/link";
import Accordion from "./Accordion";

const Activities = () => {
  return (
    <div
      id="activities"
      className="w-full min-h-[85vh] flex md:flex-row flex-col-reverse"
    >
      <div className="relative w-full min-h-[85vh] bg-[url('/images/texture-1.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="relative w-full p-10">
          <div className="w-full h-full flex flex-col justify-center items-center gap-1 text-center border border-border_color lg:p-20 p-8">
            <h1 className="text-[33.184px] leading-[46.4576px] font-galdeano mb-5">
              Expérience Casa Lalla Takerkoust
            </h1>
            <Accordion />
            <Link
              href="#"
              className="text-[12px] leading-[16.8px] tracking-widest mt-8 px-14 py-4 bg-transparent hover:bg-border_color hover:text-white  border border-border_color uppercase rounded-md transition-all duration-300"
            >
              Réserver une Expérience
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/L-167_uhoybh"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:block hidden"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/c_crop,g_south,h_4700,w_3631/casalalla-v2/akkjaul1qfiskaqrg507"
          height={1000}
          width={500}
          className="object-cover w-full h-full md:hidden block"
        />
        {/* Filter */}
        <div className="absolute inset-0 backdrop-saturate-150 backdrop-contrast-125 backdrop-brightness-90"></div>
      </div>
    </div>
  );
};

export default Activities;
