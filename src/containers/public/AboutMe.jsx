import routes from "../../settings/routes/frontend.routes";
import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCallback, useRef } from "react";

import { BlobHeader } from "../../components/customs/BlobBackground";
import { EasyButton } from "../../components/customs/CustomButton";
import { FloatImage } from "../../components/layouts/FloatContainer";
import WaveContainer from "../../components/layouts/WaveContainer";
import BlobContainer from "../../components/layouts/BlobContainer";
import Sparkles from "../../components/effects/Sparkles";
import WaveText from "../../components/effects/WaveText";
import Link from "../../components/common/ExternalLink";

const AboutMe = () => {
  const { t } = useTranslation([ns.about, ns.common]);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(`/${routes.gallery}`);
  }, []);

  return (<>
    <BlobHeader className="w-full min-h-120" containerRef={containerRef} />

    <div className="w-4/5 sm:w-2/3 md:w-5/6 xl:w-2/3 space-x-12
      flex flex-col md:flex-row mx-auto" ref={containerRef}>

      <div className="pt-8 md:pb-14 w-full flex justify-center items-center">
        <img className="w-auto h-70 md:w-auto md:h-auto md:max-h-100"
          src={images.logos.suulore_chibi} alt="" />
      </div>

      <div className="md:pt-8 pb-14 grow flex flex-col items-center relative">
        <Sparkles className="w-16 h-16 z-10 fill-font translate-y-3" stars={3} />
        <WaveText className="w-full h-18 font-extrabold fill-bold-pink text-5xl" id="c1" 
          viewport="0.625 -46.35607147216797 225 66.15290069580078" hardcoded
          alignment="middle" anchor="middle" size="1" offset="0px"
          value={t("main.title")} />

        <div className="w-full mt-2">
          <p className="text-sm">
            <Trans i18nKey="main.contents.sumii" t={t}>
              <span className="font-bold"></span>
              <span className="font-bold"></span>
              <span className="font-bold"></span>
            </Trans>
          </p>
        </div>

        <div className="w-full pt-4 pb-12">
          <p className="text-sm">
            <Trans i18nKey="main.contents.languages" t={t}>
              <span className="bg-light-cyan font-bold px-1 mr-2"></span>
            </Trans>
          </p>
          <p className="text-sm">
            <Trans i18nKey="main.contents.country" t={t}>
              <span className="bg-light-cyan font-bold px-1 mr-2"></span>
            </Trans>
          </p>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-3 gap-4 md:gap-12">
          <BlobLink className="fill-blob-pink" type="AboutMeOne"
            title={t("main.contents.links.art.title")}
            links={[
              { 
                text: t("main.contents.links.art.items.twitter"),
                href: "",
              },
              { 
                text: t("main.contents.links.art.items.vgen"),
                href: "",
              },
              { 
                text: t("main.contents.links.art.items.queue"),
                href: "",
              },
            ]} 
          />

          <BlobLink className="fill-blob-cyan" type="AboutMeTwo"
            title={t("main.contents.links.vtuber.title")}
            links={[
              { 
                text: t("main.contents.links.vtuber.items.twitch"),
                href: "",
              },
              { 
                text: t("main.contents.links.vtuber.items.youtube"),
                href: "",
              },
            ]} 
          />

          <BlobLink className="fill-blob-olive col-span-2 xs:col-span-1" type="AboutMeThree"
            title={t("main.contents.links.others.title")}
            links={[
              { 
                text: t("main.contents.links.others.items.kofi"),
                href: "",
              },
              { 
                text: t("main.contents.links.others.items.throne"),
                href: "",
              },
            ]} 
          />
        </div>
      </div>
    </div>

    <WaveContainer className="bg-transparent fill-div-bold overflow-hidden -mb-20" 
      content="bg-div-bold py-4 pb-20 relative min-h-screen" height="50" top>

      <div className="w-3/4 sm:5/6 lg:w-2/3 py-8 space-y-4 z-10">
        <div className="flex w-3/4 sm:5/6 lg:w-2/3 h-full absolute items-center pointer-events-none -z-10">
          <FloatImage left
            width={60} height={60} 
            xOffset={80} yOffset={-220}
            src={images.flowers.flower_pink_1} />
          <FloatImage left
            width={50} height={50} 
            xOffset={135} yOffset={-170}
            src={images.flowers.flower_green_small} />
          <FloatImage left
            width={60} height={60} 
            xOffset={60} yOffset={-30}
            src={images.flowers.flower_white_1} />
          <FloatImage left
            width={45} height={45} 
            xOffset={95} yOffset={40}
            src={images.sparkles.sparkle_cyan_small} />

          <FloatImage right
            width={60} height={60} 
            xOffset={40} yOffset={-250}
            src={images.flowers.flower_green_beeg} />
          <FloatImage right
            width={60} height={60} 
            xOffset={95} yOffset={-170}
            src={images.flowers.flower_white_2} />
          <FloatImage right
            width={60} height={60} 
            xOffset={85} yOffset={-30}
            src={images.sparkles.sparkle_cyan_big} />
          <FloatImage right
            width={50} height={50} 
            xOffset={60} yOffset={60}
            src={images.flowers.flower_pink_2} />
        </div> 

        <div className="space-y-2">
          <WaveText className="w-4/5 sm:w-1/2 h-20 font-extrabold fill-bold-pink text-2xl" id="c1" 
            viewport="0.625 -29.11968231201172 225 36.61968231201172" hardcoded
            alignment="bottom" anchor="start" size="1" offset="2px" 
            value={t("page.curriculum.academics.title")} />

          <div className="pt-2 sm:pt-4">
            <ExpItem id="graphic-design" t={t} 
              i18nTitle="page.curriculum.academics.items.graphic-design.title" 
              i18nSubtitle="page.curriculum.academics.items.graphic-design.subtitle" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <WaveText className="w-4/5 sm:w-1/2 h-20 font-extrabold fill-bold-pink  text-2xl" id="c1" 
            viewport="0.625 -29.36648178100586 225 36.86648178100586" hardcoded
            alignment="bottom" anchor="start" size="1" offset="0px" 
            value={t("page.curriculum.experience.title")} />

          <div className="pt-2 sm:pt-4">
            <ExpItem id="freelance" t={t} showLine
              i18nTitle="page.curriculum.experience.items.freelance.title" 
              i18nSubtitle="page.curriculum.experience.items.freelance.subtitle"
              i18nItems={[
                "page.curriculum.experience.items.freelance.items.p1",
                "page.curriculum.experience.items.freelance.items.p2",
                "page.curriculum.experience.items.freelance.items.p3",
              ]} 
            />
            <ExpItem id="megacatstudios" t={t} showLine
              i18nTitle="page.curriculum.experience.items.megacatstudios.title" 
              i18nSubtitle="page.curriculum.experience.items.megacatstudios.subtitle"
              i18nItems={[
                "page.curriculum.experience.items.megacatstudios.items.p1",
                "page.curriculum.experience.items.megacatstudios.items.p2",
                "page.curriculum.experience.items.megacatstudios.items.p3",
              ]} 
            />
            <ExpItem id="3davenue" t={t}
              i18nTitle="page.curriculum.experience.items.3davenue.title" 
              i18nSubtitle="page.curriculum.experience.items.3davenue.subtitle"
              i18nItems={[
                "page.curriculum.experience.items.3davenue.items.p1",
                "page.curriculum.experience.items.3davenue.items.p2",
                "page.curriculum.experience.items.3davenue.items.p3",
                "page.curriculum.experience.items.3davenue.items.p4",
              ]} 
            />
          </div>
        </div>

        <div className="space-y-4 pb-4 text-sm">
          <p>
            <Trans i18nKey="page.extras.skills" t={t}>
              <span className="bg-light-cyan font-bold px-1 mr-2"></span>
            </Trans>
          </p>
          <p>
            <Trans i18nKey="page.extras.softwares" t={t}>
              <span className="bg-light-cyan font-bold px-1 mr-2"></span>
            </Trans>
          </p>
          <p>
            <Trans i18nKey="page.extras.knowledge" t={t}>
              <span className="bg-light-cyan font-bold px-1 mr-2"></span>
            </Trans>
          </p>
        </div>
        
        <EasyButton 
          onClick={handleNavigate}>

          {t("page.buttons.gallery")}
        </EasyButton>
      </div>

    </WaveContainer>
  </>);
};

const BlobLink = ({ className = "", title = "", links = [], type = "AboutMeOne" }) => {
  return (
    <BlobContainer className={`px-2 ${className}`} type={type}
      content="px-8 space-y-2 w-fit space-y-1"
      background="scale-125" ratio="meet">

      <h3 className="mt-2 uppercase font-bold relative text-xs">
        <span className="absolute w-full h-full flex items-center">
          <FloatImage left
            width={10} height={10} 
            xOffset={1} yOffset={0}
            src={images.sparkles.sparkle_cyan_small} />
        </span>

        {title}
      </h3>

      <div className="mb-4 flex flex-col space-y-1 text-center">
        { links && links.map((item, i) => 
          <Link className="bg-div text-bold-pink  hover:font-medium px-1 text-sm"
            href={item.href} key={`${title}.${i}`}>{item.text}</Link>
        )}
      </div>
    </BlobContainer>
  );
};

const ExpItem = ({ t, id = "", className="", i18nTitle = "", i18nSubtitle = "", i18nItems = [], showLine }) => {
  return (
    <div className={`${className} grid grid-cols-8 gap-x-4 text-sm`}>
      <div className="flex items-center justify-center">
        <img className="w-8 h-8 select-none"
          src={images.sparkles.sparkle_cyan_big} alt="" />
      </div>
      <div className="col-span-7">
        <h4>
          <Trans i18nKey={i18nTitle} t={t}>
            <span className="font-bold"></span>
          </Trans>
        </h4>
        <p>{t(i18nSubtitle)}</p>
      </div>
      {i18nItems && i18nItems.length > 0 && <>
        <div className="grid grid-cols-2">
          { showLine && <>
              <div className="border-r-1 border-light-cyan" />
              <div className="border-l-1 border-light-cyan" />
          </>}
        </div>
        <div className="col-span-7 pb-4">
          { i18nItems.map((item, i) => 
            <p className="pl-2" key={`${id}.${i}`}>
              <span className="select-none mr-2">•</span>{t(item)}
            </p>
          )}
        </div>
      </>}
    </div>
  );
};

export default AboutMe;
