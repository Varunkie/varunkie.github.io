import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";
import photos from "../../resources/content/gallery.json";

import { useTranslation, Trans } from "react-i18next";
import React, { useCallback, useState } from 'react';

import Sparkles from "../../components/effects/Sparkles";
import WaveText from "../../components/effects/WaveText";
import WaveContainer from "../../components/layouts/WaveContainer";
import { FloatImage } from "../../components/layouts/FloatContainer";
import { BlobHeader } from "../../components/customs/BlobBackground";
import GalleryItem from "../../components/customs/GalleryItem";

import Viewport from "../modals/Viewport";

const Gallery = () => {
  const { t } = useTranslation([ns.gallery, ns.common]);
  const [image, setImage] = useState(false);

  const handleZoom = useCallback((value, e) => {
    e.preventDefault();
    setImage(value);
  }, []);

  return (<>
    { image && <Viewport image={image} setImage={setImage} /> }

    <BlobHeader className="w-full h-120" />

    <div className="pt-8 pb-14 relative flex flex-col items-center">
      <Sparkles className="w-16 h-16 z-10 fill-font translate-y-3" stars={3} />
      <WaveText className="w-full h-18 font-extrabold fill-font-bold text-6xl" id="c1" 
        viewport="0.625 -57.95635986328125 225 80.91878509521484" hardcoded
        alignment="middle" anchor="middle" size="1" offset="0px"
        value={t("header.title")} />

      <div className="grid grid-cols-3 font-bold text-sm justify-items-center items-center">
        <Trans i18nKey="header.subtitle" t={t}>
          <span className="justify-self-end translate-x-6"></span>
          <Sparkles className="w-6 h-6 z-10 fill-olive" stars={2} />
          <span className="justify-self-start -translate-x-6"></span>
        </Trans>
      </div>

      <div className="mt-4 w-2/3 flex flex-wrap justify-center font-bold px-2 uppercase text-xs gap-1 sm:gap-2">
        <h3 className="bg-light-cyan px-1 text-nowrap">{t("common.terms.illustration", { ns: ns.common })}</h3>
        <h3 className="bg-light-cyan px-1 text-nowrap">{t("common.terms.character-design", { ns: ns.common })}</h3>
        <h3 className="bg-light-cyan px-1 text-nowrap">{t("common.terms.vtubers", { ns: ns.common })}</h3>
        <h3 className="bg-light-cyan px-1 text-nowrap">{t("common.terms.stream-assets", { ns: ns.common })}</h3>
        <h3 className="bg-light-cyan px-1 text-nowrap">{t("common.terms.game-art", { ns: ns.common })}</h3>
        <h3 className="bg-light-cyan px-1 text-nowrap">{t("common.terms.infographics", { ns: ns.common })}</h3>
        <h3 className="bg-light-cyan px-1 text-nowrap">{t("common.terms.logos", { ns: ns.common })}</h3>
      </div>
    </div>

    <WaveContainer className="bg-transparent fill-div-bold overflow-hidden -mb-20" 
      content="bg-div-bold py-4 pb-20 relative"
      height="50" top>
        
      <div className="w-2/3 py-8 space-y-4">
        <div className="flex w-2/3 h-full absolute items-start pointer-events-none">
          <FloatImage left
            width={50} height={50} 
            xOffset={85} yOffset={120}
            src={images.flowers.flower_green_small} />
          <FloatImage left
            width={60} height={60} 
            xOffset={45} yOffset={40}
            src={images.flowers.flower_white_1} />
        </div>
        <div className="flex w-2/3 h-full absolute items-end pointer-events-none">
          <FloatImage right
            width={60} height={60} 
            xOffset={55} yOffset={-300}
            src={images.flowers.flower_green_beeg} />
          <FloatImage right
            width={50} height={50} 
            xOffset={100} yOffset={-200}
            src={images.flowers.flower_pink_2} />
        </div>

        <TempContainer className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" 
          content="gap-4" rows={4}>
          {
            photos && photos.map((item, x) => 
              <GalleryItem className={`cursor-pointer hover:outline-2 hover:outline-offset-2 hover:outline-button-hover`} key={x}
                src={item.meta.thumbnail ? item.meta.thumbnail : item.src} alt={item.alt}
                onClick={(e) => handleZoom(item, e)} />
            )
          }
        </TempContainer>

{/*
        <GalleryContainer className="w-fit space-x-2 justify-center" content="space-y-2">
          {
            photos && photos.map((item, x) => 
              <GalleryItem className={`${item.meta.className} grow cursor-pointer`} key={x}
                src={item.src} alt={item.alt}
                onClick={handleZoom} />
            )
          }
        </GalleryContainer>
*/}
      
        </div>
    </WaveContainer>
  </>);
};

const TempContainer = ({  id = "", className = "", content = "", children, rows }) => {
  const array = React.Children.toArray(children); 
  const elements = mapElementsByRows(array, rows);
  return (
    <div className={`${className} grid`}>
      { elements.map((element, i) => 
        <div className={`${content} grid`} key={`${id}_${i}`}>
          { element.map((value) => value )}
        </div>
      )}
    </div>
  );
};

const mapElementsByRows = (values, rows) => {
  const arrayLength = values.length;
  const elementSize = Math.ceil(arrayLength / rows);
  const containers = [];
  for (let i = 0, j = 0; i < rows && j < arrayLength; i++)
  {
    const elements = [];
    for (let k = 0; k < elementSize && j < arrayLength; k++, j++)
      elements.push(values[j]);
    containers.push(elements);
  }
  return containers;
};

export default Gallery;
