import routes from "../../resources/constants/routes/frontend.routes";
import ns from '../../resources/constants/routes/locales.routes';

import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaSteam, FaItchIo } from 'react-icons/fa';
import { BsNintendoSwitch } from 'react-icons/bs';

import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Group from "../../components/layouts/WindowGroup";
import Icon from "../../components/layouts/ExternalLink";
import Viewport from './Viewport';

const Archive = ({ index }) => {
  const { t } = useTranslation(ns.portfolio);
  const [image, setImage] = useState(false);
  const navigate = useNavigate();

  const handleClick = useCallback((value) => {
    navigate(`/${routes.portfolio}/${value}`);
  }, [navigate]);

  const handleZoom = useCallback((e) => {
    setImage(e.target);
  }, []);

  return (<>
    { image && <Viewport image={image} setImage={setImage} /> }

    <Group className="lg:px-20 space-y-6 flex flex-col items-center">
    { index === routes.itchio && <>
      <h2 className="font-bold text-2xl">{t("titles.itchio")}</h2>
      <Gallery className="">
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="sanctuary" src="https://ik.imagekit.io/varunkie/Cover_PcuCGpJBe.png" />
      </Gallery>
      <p className="whitespace-pre-line text-justify">{t("contents.itchio")}</p>
      <Controls before={routes.gamejam} next={routes.unitytools} onClick={handleClick}>
        <Icon href="https://varunkie.itch.io">
          <FaItchIo className="w-full h-full" />
        </Icon>
      </Controls>
    </>}
    { index === routes.unitytools && <>
      <h2 className="font-bold text-2xl">{t("titles.unitytools")}</h2>
      <Gallery className="">
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="moving-platforms" src="https://ik.imagekit.io/varunkie/moving-platforms-nodes_UErekbqaz.png" />
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="mechanism-system" src="https://ik.imagekit.io/varunkie/mechanism-system_7PoELYTi1.png" />
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="enviroment-tools" src="https://ik.imagekit.io/varunkie/enviroment-tool_FSIEGPOwY.png" />
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="combat-window" src="https://ik.imagekit.io/varunkie/combat-window_FLb5iYCGb.png" />
        <img className="w-auto lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="spawn-system"src="https://ik.imagekit.io/varunkie/spawn-system_P31E82TkJ.png" />
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="mechanism-system-2" src="https://ik.imagekit.io/varunkie/mechanism-system-pt2_Qhs_n2JpK.png" />
      </Gallery>
      <p className="whitespace-pre-line text-justify">{t("contents.unitytools")}</p>
      <Controls before={routes.itchio} next={routes.acolyte} onClick={handleClick}>

      </Controls>
    </>}
    { index === routes.acolyte && <>
      <h2 className="font-bold text-2xl">{t("titles.acolyte")}</h2>
      <Gallery className="">
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="acolyte-logo" src="https://ik.imagekit.io/varunkie/acolyte-logo__0vYoDJBN.png" />
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="acolyte-game" src="https://ik.imagekit.io/varunkie/acolyte__U3LlQH1p.png"  />
      </Gallery>
      <p className="whitespace-pre-line text-justify">{t("contents.acolyte")}</p>
      <Controls before={routes.unitytools} next={routes.spectrum} onClick={handleClick}>

      </Controls>
    </>}
    { index === routes.spectrum && <>
      <h2 className="font-bold text-2xl">{t("titles.spectrum")}</h2>
      <iframe className="w-full md:w-2/3 aspect-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        src="https://www.youtube.com/embed/FCHJd61tqRA" 
        title="Spectrum Switch Trailer" frameBorder="0" 
        allowFullScreen></iframe>

      <p className="whitespace-pre-line text-justify">{t("contents.spectrum")}</p>
      <Controls before={routes.acolyte} next={routes.gamejam} onClick={handleClick}>
        <Icon href="https://store.steampowered.com/app/420360/Spectrum/">
          <FaSteam className="w-full h-full" />
        </Icon>
        <Icon href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Spectrum-1416007.html">
          <BsNintendoSwitch className="w-full h-full" />
        </Icon>
      </Controls>
    </>}
    { index === routes.gamejam && <>
      <h2 className="font-bold text-2xl">{t("titles.gamejam")}</h2>
      <Gallery className="">
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="crypto-animal-home" src="https://ik.imagekit.io/varunkie/cripto_leaYP9PHI.png" />
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="wave-space" src="https://ik.imagekit.io/varunkie/title_175_yBx8TQwRu.png" />
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="guars-wars" src="https://ik.imagekit.io/varunkie/logo_269_NOggq-ptL.png" />
        <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
          alt="satelite-simulator" src="https://ik.imagekit.io/varunkie/title_267_8DzCuSc5B.png"  />
      </Gallery>
      <p className="whitespace-pre-line text-justify">{t("contents.gamejam")}</p>
      <Controls before={routes.spectrum} next={routes.itchio} onClick={handleClick}>
        <Icon href="https://globalgamejam.org/users/eduardo-borges">
          <FaExternalLinkAlt className="w-full h-full"/>
        </Icon>
      </Controls> 
    </>}
    </Group>
  </>);
};

const Gallery = ({ children }) => {;
  const array = React.Children.toArray(children); 
  return (<>
    <div className="space-y-2">
      { array.map((_, i) => {
        if (i % 2 !== 0) return null;
        return (
          <div className="flex flex-col space-y-2 justify-center md:space-y-0 md:flex-row md:space-x-2 overflow-x-hidden" key={i}>
            {array[i]}
            {array.length - 1 !== i && array[i + 1]}
          </div>
        );
      })}
    </div>
  </>);
};

const Controls = ({ children, before = "", next = "", onClick }) => {
  return (
    <div className="w-full flex justify-center space-x-4 md:space-x-8">
      <FaArrowLeft className="w-12 h-12 p-2 md:w-16 md:h-16 md:p-4 tm-border-300 object-cover cursor-pointer border-2 rounded-full"
        onClick={() => onClick && onClick(before)} />
      {children}
      <FaArrowRight className="w-12 h-12 p-2 md:w-16 md:h-16 md:p-4 tm-border-300 object-cover cursor-pointer border-2 rounded-full"
        onClick={() => onClick && onClick(next)} />
    </div>
  );
};

export default Archive;
