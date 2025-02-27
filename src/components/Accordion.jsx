"use client";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = () => {
  const [active, setActive] = useState("1");

  const togglePara = (value) => {
    setActive((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  return (
    <div className="w-full">
      <div className=" font-normal">
        <div className="border-t  border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase`}
            onClick={() => togglePara("1")}
          >
            Transport
            <div className={`ml-auto`}>
              {active === "1" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-[#d3d3d3]">
                <p>Lalla Takerkoust est accessible en taxi ou en bus.</p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t  border-[#d3d3d3]">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase`}
            onClick={() => togglePara("2")}
          >
            {`Quad / Buggy Tour`}
            <div className={`ml-auto`}>
              {active === "2" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "2" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-[#d3d3d3]">
                <p>{`Satisfaites votre besoin de vitesse et d'aventure avec un tour en quad autour de Lalla Takerkoust et admirez des paysages à couper le souffle. Des guides expérimentés vous emmèneront hors des sentiers battus, au pied des montagnes du Haut Atlas.`}</p>
                <p>
                  {`Quad simple 1 heure 300dh`}
                  <br />
                  {`Quad Double 1 Heure 500dh`}
                  <br />
                  {`Quad Simple 2 Heures 500dh`}
                  <br />
                  {`Quad Double 2 Heures 800dh`}
                  <br />
                  {`Buggy 2 places 1 Heure 800dh`}
                  <br />
                  {`Buggy 2 Places 2 Heures 1400dh`}
                </p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase`}
            onClick={() => togglePara("3")}
          >
            {`Jetski`}
            <div className={`ml-auto`}>
              {active === "3" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "3" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-[#d3d3d3]">
                <p>{`Faites battre votre cœur avec une aventure en jet ski en glissant sur le pittoresque lac de Lalla Takerkoust et en profitant d'une vue imprenable sur les montagnes enneigées du Haut Atlas.`}</p>
                <p>{`400dh pendant 15 minutes`}</p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase`}
            onClick={() => togglePara("4")}
          >
            {`Promenade dans la nature / Hike`}
            <div className={`ml-auto`}>
              {active === "4" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "4" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-[#d3d3d3]">
                <p>{`Explorez les eaux sereines de Lalla Takerkoust à pied avec un guide expert et découvrez la flore et la faune vibrantes qui se trouvent dans ce paysage diversifié. Vous pouvez choisir une promenade tranquille dans la nature ou vous aventurer dans les collines environnantes pour une randonnée plus rigoureuse. Parfait pour les ornithologues et les amateurs de photographie, cet environnement paisible promet un répit dans la vie trépidante de Marrakech.`}</p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase`}
            onClick={() => togglePara("5")}
          >
            {`Équitation`}
            <div className={`ml-auto`}>
              {active === "5" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "5" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-[#d3d3d3]">
                <p>{`Expérimentez la magie de la randonnée à cheval autour du lac étincelant de Lalla Takerkoust et découvrez des paysages variés en voyageant hors des sentiers battus autour du lac, des contreforts des montagnes du Haut Atlas et du désert de pierre voisin d'Agafay.`}</p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-b border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13px] leading-[30px] uppercase`}
            onClick={() => togglePara("6")}
          >
            {`Désert d'Agafay`}
            <div className={`ml-auto`}>
              {active === "6" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "6" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-[13px] leading-[30px] border-t border-[#d3d3d3]">
                <p>{`Découvrez le désert rocailleux d'Agafay et comprenez pourquoi c'est l'un des terrains de jeu préférés des Marocains. Vivez vos rêves de désert de dunes et explorez-le en quad, en buggy ou à dos de chameau.`}</p>
                <p>{`Les activités ne manquent pas dans le désert d'Agafay, situé à seulement 5 minutes de Lalla Takerkoust.`}</p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-b border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-[13.5px] uppercase`}
            onClick={() => togglePara("7")}
          >
            {`Excursion à vélo`}
            <div className={`ml-auto`}>
              {active === "7" ? (
                <AiOutlineMinus size={22} />
              ) : (
                <AiOutlinePlus size={22} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "7" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px] leading-[30px] border-t border-[#d3d3d3]">
                <p>{`Explorez Lalla Takerkoust lors d'une randonnée à vélo revigorante à travers le désert d'Agafay, puis arrivez à l'oasis que constituent les eaux cristallines du lac Lalla Takerkoust et les montagnes enneigées du Haut Atlas qui l'entourent. Préparez-vous à une randonnée hors du temps qui vous laissera des souvenirs inoubliables !`}</p>
              </div>
            </AnimateHeight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
