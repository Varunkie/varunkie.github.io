import ns from '../../resources/constants/routes/locales.routes';
import { LeftArrow as ArrowLeft, RightArrow as ArrowRight } from '../../resources/images';

import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaSteam, FaItchIo } from 'react-icons/fa';
import { BsNintendoSwitch } from 'react-icons/bs';

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import Gallery from "../../components/common/GalleryContainer";
import Group from "../../components/layouts/WindowGroup";
import Title from "../../components/layouts/PageTitle";
import Icon from "../../components/layouts/ExternalIcon";

const NUMBER_OF_COVERS = 5;

const Portfolio = () => {
  const [transitionStage, setTransitionStage] = useState({ to: -1, className: "" });
  const { t } = useTranslation(ns.portfolio);
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

  useEffect(() => {
    setTransitionStage(state => state.to !== -1 ? ({ to: -1, className: "fadeOut" }) : state);
  }, [location]);

  return (<>
    { index === -1 && 
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center lg:items-start`}
        onAnimationEnd={onAnimationEnded}>
          <Title className="font-bold text-3xl">{t("titles.portfolio")}</Title>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Cover className="w-full aspect-video" 
              title={t("titles.spectrum")} subtitle={t("subtitles.spectrum")} 
              value={0} onClick={handleClick} />
            <Cover className="w-full aspect-video" 
              title={t("titles.spectrum")} subtitle={t("subtitles.spectrum")} 
              value={1} onClick={handleClick} />
            <Cover className="w-full aspect-video" 
              title={t("titles.spectrum")} subtitle={t("subtitles.spectrum")} 
              value={2} onClick={handleClick} />
            <Cover className="w-full aspect-video" 
              title={t("titles.spectrum")} subtitle={t("subtitles.spectrum")} 
              value={3} onClick={handleClick} />
            <Cover className="w-full aspect-video" 
              title={t("titles.spectrum")} subtitle={t("subtitles.spectrum")} 
              value={4} onClick={handleClick} />
          </div>
      </Group>
    }
    { index === 0 &&
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center`}
        onAnimationEnd={onAnimationEnded}>
        <h2>{t("titles.gamejam")}</h2>
        <Carousel>
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
        </Carousel>
        <p>{t("contents.gamejam")}</p>
        <Controls index={index} setIndex={handleClick}>
          <Icon href="https://globalgamejam.org/users/eduardo-borges">
            <FaExternalLinkAlt className="w-full h-full"/>
          </Icon>
        </Controls>
      </Group>
    }
    { index === 1 &&
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center`}
        onAnimationEnd={onAnimationEnded}>
        <h2>{t("titles.spectrum")}</h2>
        <Carousel>
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
        </Carousel>
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
    { index === 2 &&
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center`}
        onAnimationEnd={onAnimationEnded}>
        <h2>{t("titles.acolyte")}</h2>
        <Carousel>
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
        </Carousel>
        <p>{t("contents.acolyte")}</p>
        <Controls index={index} setIndex={handleClick}>

        </Controls>
      </Group>
    }
    { index === 3 &&
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center`}
        onAnimationEnd={onAnimationEnded}>
        <h2>{t("titles.unitytools")}</h2>
        <Carousel>
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
        </Carousel>
        <p>{t("contents.unitytools")}</p>
        <Controls index={index} setIndex={handleClick}>

        </Controls>
      </Group>
    }
    { index === 4 &&
      <Group className={`${transitionStage.className} space-y-6 flex flex-col items-center`}
        onAnimationEnd={onAnimationEnded}>
        <h2>{t("titles.itchio")}</h2>
        <Carousel>
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
          <img className="w-full h-full object-cover" alt="screenshot" src="https://dummyimage.com/601x361" />
        </Carousel>
        <p>{t("contents.itchio")}</p>
        <Controls index={index} setIndex={handleClick}>
          <Icon href="https://varunkie.itch.io">
            <FaItchIo className="w-full h-full" />
          </Icon>
        </Controls>
      </Group>
    }
  </>);
};

const Cover = ({ className = "", title = "", subtitle = "", value, onClick }) => {
  return (
    <div className={`${className} flex relative`}>
      <img className="absolute inset-0 w-full h-full object-cover object-center" 
        alt="gallery" src="https://dummyimage.com/601x361" />
        
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer"
        onClick={() => onClick && onClick(value)}>
        <h2 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h2>
        <p className="text-black leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

const Carousel = ({ children }) => {
  const array = React.Children.toArray(children); 
  const [index, setIndex] = useState(0);

  return (
    <div className="relative">
      <div className="absolute top-1/2 w-full flex justify-between z-10 text-indigo-600 dark:text-black">
        { array.length > 1 && <>
          <button className="inline-block bg-white cursor-pointer -translate-x-5 rounded-full shadow-md active:translate-y-0.5" 
            type="button" onClick={() => setIndex(value => value > 0 ? value - 1 : array.length - 1)}>
              <ArrowLeft className="w-10 h-10" />
          </button>

          <button className="inline-block bg-white cursor-pointer translate-x-5 rounded-full shadow-md active:translate-y-0.5" 
            type="button" onClick={() => setIndex(value => value < array.length - 1 ? value + 1 : 0)}>
              <ArrowRight className="w-10 h-10" />
          </button>
        </>}
      </div>

      <Gallery index={index}>
        {children}
      </Gallery>
    </div>
  );
};

const Controls = ({ children, index, setIndex }) => {
  return (
    <div className="w-full flex justify-center space-x-8">
      <FaArrowLeft className="w-16 h-16 p-4 tm-border-300 object-cover cursor-pointer border-2 rounded-full"
        onClick={() => setIndex(index > 0 ? index - 1 : NUMBER_OF_COVERS - 1)} />
      {children}
      <FaArrowRight className="w-16 h-16 p-4 tm-border-300 object-cover cursor-pointer border-2 rounded-full"
        onClick={() => setIndex(index < NUMBER_OF_COVERS - 1 ? index + 1 : 0)} />
    </div>
  );
};

export default Portfolio;
