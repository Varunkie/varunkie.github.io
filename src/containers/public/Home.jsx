import routes from "../../settings/routes/frontend.routes";
import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import { FloatSparkles, FloatImage } from "../../components/layouts/FloatContainer";
import { WaveContainer } from "../../components/layouts/WaveContainer";
import { HardText as WaveText } from "../../components/effects/WaveText";

import { WindowWithBackground, WindowWithBorder } from "../../components/styles/CustomWindow";
import { WaveWith, WithSparkles } from "../../components/styles/CustomWaveText";
import { HeartButton } from "../../components/styles/CustomButton";

const Home = () => {
  const { t } = useTranslation([ns.home, ns.common]);
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(`/${routes.form}`);
  }, []);

  return (<>
    <div className="absolute w-full h-full overflow-hidden select-none">
      <img className="w-full h-screen object-cover select-none pointer-events-none"
        src="https://cdn.cpjourney.net/assets/sites/default/cpj_search_2.png" alt="" />
    </div>

    <WindowWithBackground className="space-y-0 lg:space-y-1">
      <img className="w-64 lg:w-80" src={images.pages.logo} alt="" />
      <div className="hidden xs:flex px-2 text-2xl space-x-1 sm:space-x-2 items-center font-bold uppercase">
        <h3 className="bg-light-sky mt-2 pl-1 pr-1.5">{t("header.subtitles.name")}</h3>
        <h3 className="select-none">•</h3>
        <h3 className="bg-light-sky text-6xl">{t("header.subtitles.age")}</h3>
        <h3 className="select-none">•</h3>
        <h3 className="bg-light-sky mt-2 pl-1 pr-0.5">{t("header.subtitles.party")}</h3>
      </div>
    </WindowWithBackground>

    <WaveContainer className="bg-div-bold px-8 py-12 relative" fill="fill-div-bold" top>
      <WindowWithBorder className="xs:w-11/12 sm:w-5/6">
        <div className="w-9/12 sm:w-2/3 space-y-3 mx-auto">

          <WaveWith className="fill-dark-cyan" value={t("main.title")}>
            <WithSparkles className="fill-light-cyan" />
          </WaveWith>

          <div className="md:flex">
            <div className="md:order-last">
              <FloatImage right
                className="invisible md:visible"
                width={100} height={100} 
                xOffset={-200} yOffset={-20}
                src={images.flowers.flower_green_beeg} />
              <FloatImage right
                className="invisible md:visible"
                width={100} height={100} 
                xOffset={-125} yOffset={35}
                src={images.flowers.flower_pink_2} />

              <img className="w-2/3 my-4 mx-auto"
                src="https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/8026985/Oops.png" alt="" />
              
              <FloatImage right
                className="invisible md:visible"
                width={60} height={60} 
                xOffset={-120} yOffset={-90}
                src={images.sparkles.sparkle_cyan_small} />
            </div>

            <div className="grow relative space-y-2">
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
              <FloatImage left
                width={100} height={100} 
                xOffset={15} yOffset={-65}
                src={images.flowers.flower_pink_1} />

              <p>
                <Trans i18nKey="main.contents.explication" t={t}>
                  <span className="text-dark-sky font-bold"></span>
                  <span className="text-dark-sky font-bold"></span>
                  <span className="text-dark-sky"></span>
                </Trans>
              </p>
              <HeartButton className="relative my-4 mx-auto" 
                onClick={handleNavigate}>
                  {t("forms.actions.start", { ns: ns.common })}
              </HeartButton>
              <p>
                <Trans i18nKey="main.contents.caption" t={t}>
                  <span className="text-dark-sky"></span>
                  <span className="text-dark-sky"></span>
                </Trans>
              </p>

              <FloatImage left
                width={60} height={60} 
                xOffset={115} yOffset={-15}
                src={images.sparkles.sparkle_cyan_small} />
              <FloatImage left
                width={100} height={100} 
                xOffset={30} yOffset={-100}
                src={images.flowers.flower_green_5P} />
              <FloatImage right
                className="visible md:invisible"
                width={60} height={60} 
                xOffset={50} yOffset={-90}
                src={images.sparkles.sparkle_cyan_small} />

              <p>
                <Trans i18nKey="main.contents.thanks" t={t}>
                  <span className="text-dark-sky"></span>
                  <span className="text-dark-sky"></span>
                </Trans>
              </p>
            </div>
          </div>

        </div>
      </WindowWithBorder>
    </WaveContainer>
  </>);
};

export default Home;
