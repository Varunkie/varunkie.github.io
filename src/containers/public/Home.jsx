import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { TbMailHeart  } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import { useTranslation, Trans } from "react-i18next";

import WaveContainer from "../../components/layouts/WaveContainer";
import WaveText from "../../components/texts/WaveText";

const Home = ({ style = { } }) => {
  const { t } = useTranslation([ns.home, ns.common]);

  return (<>
    <div className="pt-4 h-[80vh] xs:h-[75vh] sm:h-[70vh] lg:h-[65vh]
      space-y-0 lg:space-y-1 justify-end md:justify-start
      mx-auto flex flex-col items-center z-10">
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

    <WaveContainer className="bg-transparent fill-div-bold" color="" top bottom>
      <div className="bg-div-bold h-[75vh] xs:h-[80vh] px-8 py-12">
        <div className="relative w-full h-full">
          <div className="absolute w-full h-full flex items-center justify-between p-4">
            <button className="text-white">
              <IoIosArrowBack className="w-10 h-10 sm:w-16 sm:h-16"></IoIosArrowBack>
            </button>
            <button className="text-white">
              <IoIosArrowForward className="w-10 h-10 sm:w-16 sm:h-16"></IoIosArrowForward>
            </button>
          </div>

          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2">
            <GalleryItem className="w-full h-full" />
            <GalleryItem className="w-full h-full hidden sm:block" />
            <GalleryItem className="w-full h-full hidden sm:block" />
            <GalleryItem className="w-full h-full hidden md:block" />
            <GalleryItem className="w-full h-full hidden md:block" />
            <GalleryItem className="w-full h-full hidden lg:block" />
          </div>
        </div>
      </div>
    </WaveContainer>

    <div className="bg-div w-11/12 sm:w-5/6 mb-20 pb-4 mx-auto relative overflow-hidden
      border-t-olive border-b-light-cyan border-t-8 border-b-8 rounded-2xl flex">
      <div className="w-9/12 sm:w-2/3 py-12 px-0 lg:px-12 space-y-3 mx-auto z-10">
        <div className="w-full flex relative z-10 justify-center">
          <div className="w-100% absolute flex items-start">
            <FloatSparkles className="hidden sm:flex xs:w-14 xs:h-14 sm:w-16 sm:h-16" stars={2} left
              width={100} height={100} xOffset={100} yOffset={30} />
            <FloatSparkles className="hidden sm:flex xs:w-14 xs:h-14 sm:w-16 sm:h-16" stars={3} right
              width={100} height={100} xOffset={100} yOffset={30} />
          </div>

          <WaveText className="justify-self-start font-extrabold fill-font-bold text-6xl" id="curve" 
            alignment="middle" anchor="middle" 
            scale="1" size="1" offset="10px" y={2.5}>
            {t("main.title")}
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
              xOffset={35} yOffset={-80}
              src={images.icons.contact} />

            <TbMailHeart  className="ml-4 sm:ml-7 mr-1 w-7 h-7" />
            <label className="cursor-pointer ml-1 mr-4 sm:mr-7">{t("common.email", { ns: ns.common })}</label>
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
            xOffset={30} yOffset={-40}
            src={images.flowers.flower_green_5P} />

          <FloatImage right
            width={60} height={60} 
            xOffset={60} yOffset={-5}
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
        <p className="text-center sm:text-left sm:ml-8 relative">{t("main.contents.languages")}</p>
      </div>
    </div>
  </>);
};

const GalleryItem = ({ className = "" }) => {
  return (
    <div className={`${className} bg-red-300 rounded-3xl`}>

    </div>
  );
};

const FloatWrapper = ({ className="", width = 413, height = 272, xOffset = 0, yOffset = 0, left, right, children }) => {
  if (right)
    return (              
      <div className={`${className} absolute right-0 select-none`}
        style={{ "translate": `${width + xOffset}px ${yOffset}px` }}>
        {children}
      </div>
    );
  else
    return (              
      <div className={`${className} absolute select-none`}
        style={{ "translate": `-${width + xOffset}px ${yOffset}px` }}>
        {children}
      </div>
    );
};

const FloatImage = ({ className="", src, alt = "", width = 413, height = 272, xOffset = 0, yOffset = 0, left, right }) => {
  return (      
    <FloatWrapper className={className} width={width} height={height} 
      xOffset={xOffset} yOffset={yOffset} left={left} right={right}>
      <img style={{ "maxWidth": `${width}px`, "maxHeight": `${height}px`, "width": `${width}px`, "height": `${height}px` }}
        src={src} alt={alt} />
    </FloatWrapper>        
  );
};

const FloatSparkles = ({ className = "", stars = 2, width = 413, height = 272, xOffset = 0, yOffset = 0, left, right }) => {
  return (      
    <FloatWrapper className={`${className} flex justify-center items-center`} width={width} height={height} 
      xOffset={xOffset} yOffset={yOffset} left={left} right={right}>
      { stars === 2 && 
        <>
          <img className="absolute w-11/12 -translate-x-1 -translate-y-2 select-none"
            style={{ "minWidth": "40px" }}
            src={images.sparkles.sparkle_cyan_aboutme} alt="" />
          <img className="absolute w-1/2 translate-x-3 translate-y-4 select-none"
            style={{ "minWidth": "25px" }}
            src={images.sparkles.sparkle_cyan_aboutme} alt="" />
        </>
      }
      { stars === 3 &&
        <>
          <img className="absolute w-1/3 translate-x-2 -translate-y-5 select-none"
            style={{ "minWidth": "15px" }}
            src={images.sparkles.sparkle_cyan_aboutme} alt="" />
          <img className="absolute w-11/12 -translate-x-2 -translate-y-1 select-none"
            style={{ "minWidth": "40px" }}
            src={images.sparkles.sparkle_cyan_aboutme} alt="" />
          <img className="absolute w-2/3 translate-x-4 translate-y-4 select-none"
            style={{ "minWidth": "30px" }}
            src={images.sparkles.sparkle_cyan_aboutme} alt="" />
        </>
      }
    </FloatWrapper>        
  );
};

export default Home;
