import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full min-h-[85vh] flex md:flex-row flex-col">
      <div className="relative w-full">
        <Image
          src="/images/casa_8.jpg"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:block hidden"
        />
        <Image
          src="/images/casa_2.jpg"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:hidden block"
        />
        {/* Filter */}
        <div className="absolute inset-0 backdrop-saturate-200"></div>
      </div>
      <div className="relative w-full min-h-[85vh] bg-[url('/images/texture-1.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="relative w-full p-10">
          <div className="w-full h-full flex flex-col justify-center items-center gap-1 text-center border border-border_color lg:p-20 p-14">
            <h1 className="text-[33.184px] leading-[46.4576px] font-galdeano mb-5">
              Casa Lalla Takerkoust
            </h1>
            <p className="text-[13px] leading-[30px] uppercase">{`Le restaurant Casa Lalla Takerkoust est une véritable invitation au voyage, où l’esprit envoûtant de Mykonos, Ibiza et des îles Baléares rencontre la sérénité des eaux cristallines de Lalla Takerkoust et le décor majestueux des montagnes du Haut Atlas.`}</p>
            <p className="text-[13px] leading-[30px] uppercase">{`À seulement 30 minutes de Marrakech, laissez-vous porter par des rythmes enivrants venus des quatre coins du monde et savourez une cuisine méditerranéenne raffinée, pensée pour être partagée entre amis, anciens et nouveaux.`}</p>
            <p className="text-[13px] leading-[30px] uppercase">{`Plus qu’un simple restaurant, Casa Lalla Takerkoust est une parenthèse enchantée, où le luxe authentique se mêle à la beauté naturelle du paysage, à la chaleur des rencontres et à une énergie vibrante. Ici, chaque instant est une célébration de la vie.`}</p>
            <Link
              href="#"
              className="text-[12px] leading-[16.8px] tracking-widest mt-8 px-14 py-4 bg-transparent hover:bg-border_color hover:text-white  border border-border_color uppercase rounded-md transition-all duration-300"
            >
              Reserver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
