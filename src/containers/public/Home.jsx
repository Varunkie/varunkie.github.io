import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import photos from "../../resources/content/gallery.json";
import routes from "../../settings/routes/frontend.routes";
import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

import { EmailButton } from "../../components/customs/CustomButton";
import { CarouselItem } from "../../components/customs/ImagePreview";
import { FloatSparkles, FloatImage } from "../../components/layouts/FloatContainer";
import WaveContainer from "../../components/layouts/WaveContainer";
import Carousel from '../../components/common/GalleryCarousel';
import WaveText from "../../components/effects/WaveText";

const Home = () => {
  const { t } = useTranslation([ns.home, ns.common]);
  const [image, setImage] = useState(false);
  const navigate = useNavigate();

  const handleEmail = useCallback(() => {
    navigate(`/${routes.contact}`);
  }, []);

  return (<>
    { image && <Viewport image={image} setImage={setImage} /> }

    <div className="flex flex-col items-center mx-auto justify-end md:justify-start
      pt-4 h-[80vh] xs:h-[75vh] sm:h-[70vh] lg:h-[65vh] space-y-0 lg:space-y-1 z-10">
      <img className="w-64 lg:w-80 select-none"
        src={images.logos.suulore_outline} alt="" />
      <div className="hidden xs:flex font-bold bg-olive px-2 uppercase text-xs space-x-1 sm:space-x-2">
        <h3>{t("common.terms.illustration", { ns: ns.common })}</h3>
        <h3 className="select-none">•</h3>
        <h3>{t("common.terms.graphic-design", { ns: ns.common })}</h3>
        <h3 className="select-none">•</h3>
        <h3>{t("common.terms.stream-assets", { ns: ns.common })}</h3>
      </div>
    </div>

    <WaveContainer className="bg-transparent fill-div-bold" top bottom
      content="bg-div-bold px-8 py-12 relative">

      <div className="w-full h-full relative">
        <Carousel className="w-full h-[75vh] xs:h-[80vh] grid md:grid-cols-5 gap-2 p-2">
          { photos && photos.map((item, i) => 
            <CarouselItem key={`photos_${i}`}
              thumbnail={item.thumbnail} fullart={item.src} alt={item.alt} 
              selectable />
          )}
        </Carousel>
      </div>
      
    </WaveContainer>

    <div className="w-11/12 sm:w-5/6 mb-20 pt-6 pb-8 bg-div flex relative mx-auto
      border-t-olive border-b-light-cyan border-t-8 border-b-8 rounded-2xl overflow-hidden">
      <div className="w-9/12 sm:w-2/3 py-6 px-0 lg:px-12 space-y-3 mx-auto z-10">

        <div className="w-full pb-4 flex relative z-10 justify-center">
          <WaveText className="w-full h-20 flex justify-center font-extrabold fill-bold-pink  text-6xl" id="c1" 
            viewport="0.625 -53.44183349609375 225 70.94506072998047" hardcoded
            alignment="middle" anchor="middle" size="1" offset="10px" 
            value = {t("main.title")}>

            <div className="w-0 h-full absolute flex jusitfy-center items-center fill-light-cyan">
              <FloatSparkles className="hidden xs:flex xs:w-14 xs:h-14 sm:w-16 sm:h-16" 
                stars={2} width={100} height={100} xOffset={-115} yOffset={0} />
              <FloatSparkles className="hidden xs:flex xs:w-14 xs:h-14 sm:w-16 sm:h-16" 
                stars={3} width={100} height={100} xOffset={150} yOffset={0} />
            </div>
          </WaveText>
        </div>

        <div className="relative">
          <FloatImage left
            width={100} height={100} 
            xOffset={15} yOffset={-65}
            src={images.flowers.flower_pink_1} />

          <FloatImage right
            width={100} height={100} 
            xOffset={0} yOffset={-20}
            src={images.flowers.flower_green_beeg} />

          <FloatImage right
            width={100} height={100} 
            xOffset={75} yOffset={35}
            src={images.flowers.flower_pink_2} />

          <p>
            <Trans i18nKey="main.contents.about-me" t={t}>
              <span className="font-bold"></span>
              <span className="font-bold"></span>
              <span className="font-bold"></span>
            </Trans>
          </p>
        </div>

        <div className="relative flex justify-center py-5">
          <EmailButton className="relative" 
            label={t("common.email", { ns: ns.common })}
            onClick={handleEmail}>

            <FloatImage className="cursor-default" left
              width={413} height={272} 
              xOffset={35} yOffset={-80}
              src={images.icons.contact} />
          </EmailButton>
        </div>
        
        <div className="relative">
          <FloatImage left
            width={60} height={60} 
            xOffset={115} yOffset={5}
            src={images.sparkles.sparkle_cyan_small} />
          <p className="relative">{t("main.contents.business")}</p>
        </div>

        <p className="relative">
          <Trans i18nKey="main.contents.caption" t={t}>
            <span className="text-soft-pink "></span>
          </Trans>
        </p>

        <div className="relative">
          <FloatImage left
            width={100} height={100} 
            xOffset={30} yOffset={-40}
            src={images.flowers.flower_green_5P} />

          <FloatImage right
            width={60} height={60} 
            xOffset={60} yOffset={-5}
            src={images.sparkles.sparkle_cyan_small} />

          <p>
            <Trans i18nKey="main.contents.commission" t={t}>
              <span className="text-soft-pink "></span>
              <span className="text-soft-pink "></span>
              <span className="text-soft-pink "></span>
            </Trans>
          </p>
        </div>

        <p className="relative">{t("main.contents.thank-you")}</p>
        <p className="text-center sm:text-left sm:ml-8 relative">{t("main.contents.languages")}</p>

      </div>
    </div>
  </>);
};

export default Home;
