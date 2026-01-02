import routes from "../../settings/routes/frontend.routes";
import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import { StartButton } from "../../components/customs/CustomButton";
import { FloatSparkles, FloatImage } from "../../components/layouts/FloatContainer";
import { WaveContainer } from "../../components/layouts/WaveContainer";
import { HardText as WaveText } from "../../components/effects/WaveText";

const Home = () => {
  const { t } = useTranslation([ns.home, ns.common]);
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(`/${routes.form}`);
  }, []);

  return (<>
    <div className="absolute w-full h-full overflow-hidden select-none">
      <img className="h-screen object-cover select-none pointer-events-none"
        src="https://cdn.cpjourney.net/assets/sites/default/cpj_search_2.png" alt="" />
    </div>

    <div className="flex flex-col items-center mx-auto justify-end md:justify-start
      pt-4 h-[80vh] xs:h-[75vh] sm:h-[70vh] lg:h-[65vh] space-y-0 lg:space-y-1 z-10
      select-none pointer-events-none">
      <img className="w-64 lg:w-80"
        src={images.pages.logo} alt="" />
      <div className="hidden xs:flex font-bold px-2 uppercase text-2xl space-x-1 sm:space-x-2 items-center">
        <h3 className="bg-light-sky mt-2 pl-1 pr-1.5">{t("header.subtitles.name")}</h3>
        <h3 className="select-none">•</h3>
        <h3 className="text-6xl text-light-sky">{t("header.subtitles.age")}</h3>
        <h3 className="select-none">•</h3>
        <h3 className="bg-light-sky mt-2 pl-1 pr-0.5">{t("header.subtitles.party")}</h3>
      </div>
    </div>

    <WaveContainer className="bg-transparent fill-div-bold" top
      content="bg-div-bold px-8 py-12 relative">

      <div className="w-11/12 sm:w-5/6 pt-6 pb-8 bg-div flex relative mx-auto
        border-t-olive border-b-olive border-t-8 border-b-8 rounded-2xl overflow-hidden">
        <div className="w-9/12 sm:w-2/3 py-6 px-0 lg:px-12 space-y-3 mx-auto z-10">

          <div className="w-full pb-4 flex relative z-10 justify-center">
            <WaveText id="c1"
              className="w-full h-20 flex justify-center font-extrabold fill-dark-sky text-6xl" 
              viewport="0.625 -53.44183349609375 225 70.94506072998047"
              alignment="middle" anchor="middle" offset="0px" 
              value = {t("main.title")}>

              <div className="w-0 h-full absolute flex jusitfy-center items-center fill-light-cyan">
                <FloatSparkles className="hidden xs:flex xs:w-14 xs:h-14 sm:w-16 sm:h-16" 
                  stars={2} width={100} height={100} xOffset={-120} yOffset={0} />
                <FloatSparkles className="hidden xs:flex xs:w-14 xs:h-14 sm:w-16 sm:h-16" 
                  stars={3} width={100} height={100} xOffset={155} yOffset={0} />
              </div>
            </WaveText>
          </div>

          <div className="md:flex">
            <div className="md:order-last">
              <FloatImage right
                className="invisible md:visible"
                width={100} height={100} 
                xOffset={-300} yOffset={-20}
                src={images.flowers.flower_green_beeg} />

              <FloatImage right
                className="invisible md:visible"
                width={100} height={100} 
                xOffset={-225} yOffset={35}
                src={images.flowers.flower_pink_2} />

              <img className=""
                src="https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/8026985/Oops.png" alt="" />

              <FloatImage right
                className="invisible md:visible"
                width={60} height={60} 
                xOffset={-220} yOffset={-90}
                src={images.sparkles.sparkle_cyan_small} />
            </div>

            <div className="grow">
              <div className="relative pt-8 md:pt-0">
                <FloatImage left
                  width={100} height={100} 
                  xOffset={15} yOffset={-65}
                  src={images.flowers.flower_pink_1} />

                <FloatImage right
                  className="visible md:invisible"
                  width={100} height={100} 
                  xOffset={0} yOffset={-20}
                  src={images.flowers.flower_green_beeg} />

                <FloatImage right
                  className="visible md:invisible"
                  width={100} height={100} 
                  xOffset={75} yOffset={35}
                  src={images.flowers.flower_pink_2} />

                <p>
                  <Trans i18nKey="main.contents.explication" t={t}>
                    <span className="text-dark-sky font-bold"></span>
                    <span className="text-dark-sky font-bold"></span>
                    <span className="text-dark-sky"></span>
                  </Trans>
                </p>
              </div>

              <div className="relative flex justify-center py-5">
                <StartButton className="relative" 
                  label={t("forms.actions.start", { ns: ns.common })}
                  onClick={handleNavigate}>
                </StartButton>
              </div>
              
              <div className="relative">
                <FloatImage left
                  width={60} height={60} 
                  xOffset={115} yOffset={5}
                  src={images.sparkles.sparkle_cyan_small} />

                <p>
                  <Trans i18nKey="main.contents.caption" t={t}>
                    <span className="text-dark-sky"></span>
                    <span className="text-dark-sky"></span>
                  </Trans>
                </p>
              </div>

              <div className="relative">
                <FloatImage left
                  width={100} height={100} 
                  xOffset={30} yOffset={-40}
                  src={images.flowers.flower_green_5P} />

                <FloatImage right
                  className="visible md:invisible"
                  width={60} height={60} 
                  xOffset={50} yOffset={-90}
                  src={images.sparkles.sparkle_cyan_small} />

                <p className="mt-2">{t("main.contents.thanks")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </WaveContainer>
  </>);
};

export default Home;
