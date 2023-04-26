import ns from '../../resources/constants/routes/locales.routes';

import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaSteam, FaItchIo } from 'react-icons/fa';
import { BsNintendoSwitch } from 'react-icons/bs';

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import Group from "../../components/layouts/WindowGroup";
import Title from "../../components/layouts/PageTitle";
import Icon from "../../components/layouts/ExternalLink";
import Viewport from './Viewport';

const NUMBER_OF_COVERS = 5;

const Portfolio = () => {
  const [transitionStage, setTransitionStage] = useState({ to: -1, className: "" });
  const { t } = useTranslation(ns.portfolio);
  const [image, setImage] = useState(false);
  const [index, setIndex] = useState(-1);
  const location = useLocation();

  const handleClick = (value) => {
    setTransitionStage({ to: value, className: "fadeOut" });
  };

  const onAnimationEnded = () => {
    if (transitionStage.className === "fadeOut") {
      let value = transitionStage.to; setIndex(value);
      setTransitionStage(state => ({ ...state, className: "fadeIn" }));
    } 
  };

  const handleZoom = (e) => {
    setImage(e.target);
  };

  useEffect(() => {
    setTransitionStage(state => state.to !== -1 ? ({ to: -1, className: "fadeOut" }) : state);
  }, [location]);

  return (<>
    { image && <Viewport image={image} setImage={setImage} /> }

    { index === -1 && 
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center lg:items-start`}
        onAnimationEnd={onAnimationEnded}>
          <Title className="font-bold text-3xl">{t("titles.portfolio")}</Title>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Cover className="w-full aspect-video" 
              src="https://ik.imagekit.io/varunkie/Cover_PcuCGpJBe.png"
              title={t("titles.itchio")} subtitle={t("subtitles.itchio")} 
              value={4} onClick={handleClick} />
            <Cover className="w-full aspect-video" 
              src="https://ik.imagekit.io/varunkie/enviroment-tool_FSIEGPOwY.png"
              title={t("titles.unitytools")} subtitle={t("subtitles.unitytools")} 
              value={3} onClick={handleClick} />
            <Cover className="w-full aspect-video" 
              src="https://ik.imagekit.io/varunkie/acolyte-logo__0vYoDJBN.png"
              title={t("titles.acolyte")} subtitle={t("subtitles.acolyte")} 
              value={2} onClick={handleClick} />
            <Cover className="w-full aspect-video" 
              src="https://ik.imagekit.io/varunkie/spectrum-logo_K8BkRrrji.jpg"
              title={t("titles.spectrum")} subtitle={t("subtitles.spectrum")} 
              value={1} onClick={handleClick} />
            <Cover className="w-full aspect-video" 
              src="https://ik.imagekit.io/varunkie/gamejam-logo_VhAK7v_Pw.png"
              title={t("titles.gamejam")} subtitle={t("subtitles.gamejam")} 
              value={0} onClick={handleClick} />
          </div>
      </Group>
    }
    { index === 4 &&
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center`}
        onAnimationEnd={onAnimationEnded}>
        <h2 className="font-bold text-2xl">{t("titles.itchio")}</h2>
        <Gallery className="">
          <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
            alt="sanctuary" src="https://ik.imagekit.io/varunkie/Cover_PcuCGpJBe.png" />
        </Gallery>
        <p>{t("contents.itchio")}</p>
        <Controls index={index} setIndex={handleClick}>
          <Icon href="https://varunkie.itch.io">
            <FaItchIo className="w-full h-full" />
          </Icon>
        </Controls>
      </Group>
    }
    { index === 3 &&
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center`}
        onAnimationEnd={onAnimationEnded}>
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
        <p>{t("contents.unitytools")}</p>
        <Controls index={index} setIndex={handleClick}>

        </Controls>
      </Group>
    }
    { index === 2 &&
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center`}
        onAnimationEnd={onAnimationEnded}>
        <h2 className="font-bold text-2xl">{t("titles.acolyte")}</h2>
        <Gallery className="">
          <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
            alt="acolyte-logo" src="https://ik.imagekit.io/varunkie/acolyte-logo__0vYoDJBN.png" />
          <img className="w-full lg:h-72 cursor-pointer" onClick={handleZoom} 
            alt="acolyte-game" src="https://ik.imagekit.io/varunkie/acolyte__U3LlQH1p.png"  />
        </Gallery>
        <p>{t("contents.acolyte")}</p>
        <Controls index={index} setIndex={handleClick}>

        </Controls>
      </Group>
    }
    { index === 1 &&
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center`}
        onAnimationEnd={onAnimationEnded}>
        <h2 className="font-bold text-2xl">{t("titles.spectrum")}</h2>
        <iframe className="w-full md:w-2/3 aspect-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          src="https://www.youtube.com/embed/FCHJd61tqRA" 
          title="Spectrum Switch Trailer" frameborder="0" 
          allowfullscreen></iframe>

        <p>{t("contents.spectrum")}</p>
        <Controls index={index} setIndex={handleClick}>
          <Icon href="https://store.steampowered.com/app/420360/Spectrum/">
            <FaSteam className="w-full h-full" />
          </Icon>
          <Icon href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Spectrum-1416007.html">
            <BsNintendoSwitch className="w-full h-full" />
          </Icon>
        </Controls>
      </Group>
    }
    { index === 0 &&
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center`}
        onAnimationEnd={onAnimationEnded}>
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
        <p>{t("contents.gamejam")}</p>
        <Controls index={index} setIndex={handleClick}>
          <Icon href="https://globalgamejam.org/users/eduardo-borges">
            <FaExternalLinkAlt className="w-full h-full"/>
          </Icon>
        </Controls>
      </Group>
    }
  </>);
};

const Cover = ({ className = "", src = "", title = "", subtitle = "", value, onClick }) => {
  return (
    <div className={`${className} flex relative`}>
      <img className="absolute inset-0 w-full h-full object-cover object-center" 
        alt={title} src={src}/>
        
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 cursor-pointer"
        onClick={() => onClick && onClick(value)}>
        <h2 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h2>
        <p className="text-black leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
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

const Controls = ({ children, index, setIndex }) => {
  return (
    <div className="w-full flex justify-center space-x-8">
      <FaArrowLeft className="w-16 h-16 p-4 tm-border-300 object-cover cursor-pointer border-2 rounded-full"
        onClick={() => setIndex(index < NUMBER_OF_COVERS - 1 ? index + 1 : 0)} />
      {children}
      <FaArrowRight className="w-16 h-16 p-4 tm-border-300 object-cover cursor-pointer border-2 rounded-full"
        onClick={() => setIndex(index > 0 ? index - 1 : NUMBER_OF_COVERS - 1)} />
    </div>
  );
};

export default Portfolio;
