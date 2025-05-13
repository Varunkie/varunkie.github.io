import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { TbMailHeart  } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import { useTranslation, Trans } from "react-i18next";

import Wave from "../../components/layouts/WaveContainer";

const Home = ({ style = { } }) => {
  const { t } = useTranslation([ns.home, ns.common]);

  return (<>
    <div className="pt-4 h-[65vh] mx-auto flex flex-col items-center space-y-0 lg:space-y-1 justify-end md:justify-start z-10">
      <img className="w-64 lg:w-80 select-none"
        src={images.logos.suulore} alt="" />
      <div className="flex font-bold bg-olive px-2 uppercase text-xs space-x-2">
        <h3>{t("common.terms.illustration", { ns: ns.common })}</h3>
        <h3 className="select-none">•</h3>
        <h3>{t("common.terms.graphic-design", { ns: ns.common })}</h3>
        <h3 className="select-none">•</h3>
        <h3>{t("common.terms.stream-assets", { ns: ns.common })}</h3>
      </div>
    </div>

    <Wave className="bg-transparent fill-div-bold" color="" top bottom>
      <div className="bg-div-bold h-[70vh] p-6">
        <div className="relative w-full h-full">
          <div className="absolute w-full h-full flex items-center justify-between p-4">
            <button className="text-white">
              <IoIosArrowBack className="w-16 h-16"></IoIosArrowBack>
            </button>
            <button className="text-white">
              <IoIosArrowForward className="w-16 h-16"></IoIosArrowForward>
            </button>
          </div>

          <div className="w-full h-full grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            <GalleryItem className="w-full h-full" />
            <GalleryItem className="w-full h-full" />
            <GalleryItem className="w-full h-full" />
            <GalleryItem className="w-full h-full" />
            <GalleryItem className="w-full h-full hidden md:block" />
            <GalleryItem className="w-full h-full hidden lg:block" />
          </div>
        </div>

      </div>
    </Wave>

    <div className="bg-div w-5/6 mb-20 pb-4 mx-auto relative overflow-hidden
      border-t-olive border-b-light-cyan border-t-8 border-b-8 rounded-2xl flex">
      <div className="w-2/3 px-0 py-12 lg:px-12 space-y-3 mx-auto z-10">
        <div className="w-full flex justify-center relative space-x-4">
          <Sparkles className="w-16" number={2} />
          <h2 className="font-bold text-font-bold text-7xl z-10">{t("main.title")}</h2>
          <Sparkles className="w-16" number={3} />
        </div>

        <div className="relative">
          <FloatImage left
            width={100} height={100} 
            xOffset={33} yOffset={-80}
            src={images.flowers.flower_pink_1} />

          <FloatImage right
            width={100} height={100} 
            xOffset={0} yOffset={-30}
            src={images.flowers.flower_green_beeg} />

          <FloatImage right
            width={100} height={100} 
            xOffset={75} yOffset={35}
            src={images.flowers.flower_pink_2} />

          <p className="relative pt-4 z-10">
            <Trans i18nKey="main.contents.about-me" t={t}>
              <span className="font-bold"></span>
              <span className="font-bold"></span>
              <span className="font-bold"></span>
            </Trans>
          </p>
        </div>

        <div className="relative flex justify-center py-5">
          <button className="bg-button py-3 rounded-2xl text-white flex items-center uppercase font-bold">
            <FloatImage 
              width={413} height={272} 
              xOffset={33} yOffset={-80}
              src={images.icons.contact} />

            <TbMailHeart  className="ml-7 mr-1 w-7 h-7" />
            <label className="cursor-pointer ml-1 mr-7">{t("common.email", { ns: ns.common })}</label>
          </button>
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
            <span className="text-font-soft"></span>
          </Trans>
        </p>
        <div className="relative">
          <FloatImage left
            width={100} height={100} 
            xOffset={33} yOffset={-40}
            src={images.flowers.flower_green_5P} />

          <FloatImage right
            width={60} height={60} 
            xOffset={65} yOffset={-5}
            src={images.sparkles.sparkle_cyan_small} />

          <p className="relative">
            <Trans i18nKey="main.contents.commission" t={t}>
              <span className="text-font-soft"></span>
              <span className="text-font-soft"></span>
              <span className="text-font-soft"></span>
            </Trans>
          </p>
        </div>
        <p className="relative">{t("main.contents.thank-you")}</p>
        <p className="ml-8 relative">{t("main.contents.languages")}</p>
      </div>
    </div>
  </>);
};

const Sparkles = ({ className = "", number = 2 }) => {
  if (number === 2)
    return (
      <div className={`${className} relative flex justify-center items-center`}>
        <img className="absolute w-11/12 rotate-[5rad] -translate-x-2 -translate-y-2 select-none"
          style={{ "minWidth": "40px" }}
          src={images.sparkles.sparkle_cyan_aboutme} alt="" />
        <img className="absolute w-1/2 rotate-[25rad] translate-x-2 translate-y-4 select-none"
          style={{ "minWidth": "25px" }}
          src={images.sparkles.sparkle_cyan_aboutme} alt="" />
      </div>
    );
  else if (number === 3)
    return (
      <div className={`${className} relative flex justify-center items-center`}>
        <img className="absolute w-1/3 rotate-[30rad] translate-x-2 -translate-y-5 select-none"
          style={{ "minWidth": "15px" }}
          src={images.sparkles.sparkle_cyan_aboutme} alt="" />
        <img className="absolute w-11/12 rotate-[-5rad] -translate-x-2 -translate-y-1 select-none"
          style={{ "minWidth": "40px" }}
          src={images.sparkles.sparkle_cyan_aboutme} alt="" />
        <img className="absolute w-2/3 rotate-[10rad] translate-x-4 translate-y-4 select-none"
          style={{ "minWidth": "30px" }}
          src={images.sparkles.sparkle_cyan_aboutme} alt="" />
      </div>
    );
  else
    return null;
};

const FloatImage = ({ src, alt = "", width = 413, height = 272, xOffset = 0, yOffset = 0, left, right }) => {
  if (right)
    return (              
      <div className="absolute right-0 select-none" style={{ "translate": `${width + xOffset}px ${yOffset}px` }}>
        <img style={{ "maxWidth": `${width}px`, "maxHeight": `${height}px`, "width": `${width}px`, "height": `${height}px` }}
          src={src} alt={alt} />
      </div>
    );
  else
    return (              
      <div className="absolute select-none" style={{ "translate": `-${width + xOffset}px ${yOffset}px` }}>
        <img style={{ "maxWidth": `${width}px`, "maxHeight": `${height}px`, "width": `${width}px`, "height": `${height}px` }}
          src={src} alt={alt} />
      </div>
    );
};

const GalleryItem = ({ className = "" }) => {
  return (
    <div className={`${className} bg-red-300 rounded-3xl`}>

    </div>
  );
};

export default Home;
