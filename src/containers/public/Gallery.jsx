import photos from "../../resources/content/gallery.json";
import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useTranslation, Trans } from "react-i18next";
import React, { useCallback, useState, useRef } from 'react';

import { GalleryItem } from "../../components/customs/ImagePreview";
import { BlobHeader } from "../../components/customs/BlobBackground";
import { FloatImage } from "../../components/layouts/FloatContainer";
import WaveContainer from "../../components/layouts/WaveContainer";
import PhotoCollage from "../../components/common/PhotoCollage";
import Sparkles from "../../components/effects/Sparkles";
import WaveText from "../../components/effects/WaveText";

import Viewport from "../modals/Viewport";

const Gallery = () => {
  const { t } = useTranslation([ns.gallery, ns.common]);
  const [image, setImage] = useState(false);
  const containerRef = useRef(null);

  const handleZoom = useCallback((value, e) => {
    e.preventDefault();
    setImage(value);
  }, []);

  return (<>
    { image && <Viewport image={image} setImage={setImage} /> }

    <BlobHeader className="w-full min-h-120" containerRef={containerRef} />

    <div className="pt-8 pb-14 relative flex flex-col items-center" ref={containerRef}>
      <Sparkles className="w-16 h-16 z-10 fill-font translate-y-3" stars={3} />
      <WaveText className="w-full h-18 font-extrabold fill-bold-pink  text-6xl" id="c1" 
        viewport="0.625 -57.95635986328125 225 80.91878509521484" hardcoded
        alignment="middle" anchor="middle" size="1" offset="0px"
        value={t("header.title")} />

      <div className="grid grid-cols-3 font-bold text-sm justify-items-center items-center">
        <Trans i18nKey="header.subtitle" t={t}>
          <span className="justify-self-end translate-x-6 text-right"></span>
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
      content="bg-div-bold py-4 pb-24 relative" height="50" top>

      <div className="w-4/5 sm:w-2/3 py-8 space-y-4">
        <div className="flex w-4/5 sm:w-2/3 h-full absolute items-start pointer-events-none">
          <FloatImage left
            width={50} height={50} 
            xOffset={85} yOffset={120}
            src={images.flowers.flower_green_small} />
          <FloatImage left
            width={60} height={60} 
            xOffset={45} yOffset={40}
            src={images.flowers.flower_white_1} />
        </div>

        <div className="flex w-4/5 sm:w-2/3 h-full absolute items-end pointer-events-none">
          <FloatImage right
            width={60} height={60} 
            xOffset={55} yOffset={-300}
            src={images.flowers.flower_green_beeg} />
          <FloatImage right
            width={50} height={50} 
            xOffset={100} yOffset={-200}
            src={images.flowers.flower_pink_2} />
        </div>

        <PhotoCollage className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" 
          content="gap-4" rows={4}>
          { photos && photos.map((item, i) => 
            <GalleryItem 
              thumbnail={item.meta.thumbnail} fullart={item.src} alt={item.alt}
              onClick={(e) => handleZoom(item, e)} key={`photos_${i}`} 
              selectable />
          )}
        </PhotoCollage>
      </div>

    </WaveContainer>
  </>);
};

export default Gallery;
