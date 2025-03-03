import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
  FaDivide,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-[60vh] flex md:flex-row flex-col">
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/yntqxtyrr6twlbnk7fma"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:block hidden"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/lhb2mbtjxmjl5p8jxycr"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:hidden block"
        />
        {/* Filter */}
        <div className="absolute inset-0 backdrop-saturate-150 backdrop-contrast-125 backdrop-brightness-90"></div>
      </div>
      <div className="w-full min-h-[60vh]">
        <div className="w-full p-5 lg:p-10">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center bg-[#F2D8BD] lg:p-20 p-5">
            <img
              src="/logo-1.png"
              alt="Logo Casa lalla"
              className={`w-44 h-44`}
            />
            <p className="text-[13px] leading-[30px] uppercase">{`Le restaurant Casa Lalla Takerkoust`}</p>
            <p className="text-[13px] leading-[30px] uppercase">{`ouvert tous les jours de 13h à 15h30`}</p>
            <div className="text-[13px] leading-[30px] uppercase flex justify-center items-center gap-2">
              <span>Email : </span>
              <Link href="#">{`reservations@casalallatakerkoust.com`}</Link>
            </div>
            <div className="text-[13px] leading-[30px] uppercase flex justify-center items-center gap-2">
              <span>Tel :</span>
              <Link href="#">{`+212 675-480103`}</Link>
            </div>
            <div className="w-full text-black py-4 flex justify-center items-center gap-3">
              <Link href="http://wa.me/212675480103" target="_blank">
                <FaWhatsappSquare size={25} color="#128c7e" />
              </Link>
              <Link
                href="https://www.instagram.com/casa.lalla.takerkoust/"
                target="_blank"
              >
                <FaInstagramSquare size={25} color="#ec0075" />
              </Link>
              <Link
                href="mailto:reservations@casalallatakerkoust.com"
                target="_blank"
              >
                <FaMailBulk size={25} color="#034fa0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
