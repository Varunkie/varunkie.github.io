import routes from "../../settings/routes/frontend.routes";
import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCallback, useRef } from "react";

import { BlobHeader } from "../../components/customs/BlobBackground";
import { FloatImage } from "../../components/layouts/FloatContainer";
import { WaveContainer } from "../../components/layouts/WaveContainer";
import { BlobContainer } from "../../components/layouts/BlobContainer";
import { HardText as WaveText } from "../../components/effects/WaveText";

import Sparkles from "../../components/effects/Sparkles";

const Commissions = () => {
  const { t } = useTranslation(ns.commissions);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigate = useCallback((value) => {
    navigate(`/${routes.commissions}/${value}`);
  }, []);

  return (<>
    <BlobHeader className="w-full min-h-120" containerRef={containerRef} />

    <div className="pt-8 pb-14 relative flex flex-col items-center" ref={containerRef}>
      <Sparkles className="w-16 h-16 z-10 fill-font translate-y-3" stars={3} />
      <WaveText id="c1"
        className="w-full h-20 font-extrabold fill-bold-pink text-3xl xs:text-4xl"  
        viewport="0.625 -34.98773193359375 225 51.59220504760742" 
        alignment="middle" anchor="middle" offset="0px"
        value={t("header.title")} />
        
      <div className="grid grid-cols-3 font-bold text-sm justify-items-center items-center">
        <Trans i18nKey="header.subtitle" t={t}>
          <span className="justify-self-end translate-x-6"></span>
          <Sparkles className="w-6 h-6 z-10 fill-olive" stars={2} />
          <span className="justify-self-start -translate-x-6"></span>
        </Trans>
      </div>
    </div>

    <WaveContainer className="bg-transparent fill-div-bold overflow-hidden" 
      content="bg-div-bold py-4 space-y-2" height="50" top bottom>
 
      <div className="flex flex-col items-center">
        <h2 className="text-bold-pink  font-bold text-3xl">{t("main.exclamation")}</h2>
        <h3 className="px-2 -translate-y-1 text-sm text-center">
          <Trans i18nKey="main.caption" t={t}>
            <span className="font-bold"></span>
          </Trans>
        </h3>
      </div>

      <div className="w-[75vw] h-full grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto relative py-4">
        <PageType className="flex justify-end items-end group" 
          onClick={() => handleNavigate(routes.regular)} left>

          <p>{t("main.links.regular")}</p>
          <span className="w-4 h-4 bg-light-cyan group-hover:animate-spin"></span>
        </PageType>

        <PageType className="flex justify-end md:justify-start items-end group" 
          onClick={() => handleNavigate(routes.vtuber)} right>

          <p className="md:mx-2 order-0 md:order-1">{t("main.links.vtubers")}</p>
          <div className="w-4 h-4 bg-light-cyan group-hover:animate-spin"></div>
        </PageType>
      </div>
    </WaveContainer>

    <div className="w-[75vw] h-full flex flex-col items-center space-y-4 py-4 mx-auto">
      <div className="flex flex-col items-center">
        <Sparkles className="w-8 h-8 z-10 fill-olive" stars={2} />
        <WaveText id="c2"
          className="w-full h-10 font-extrabold fill-bold-pink text-xl"
          viewport="0.625 -17.61100196838379 225 29.448198318481445" 
          alignment="middle" anchor="middle" offset="0px"
          value={t("page.tos.title")} />
        <h2 className="text-base xs:text-lg">{t("page.tos.subtitle")}</h2>
      </div>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
        <div className="pt-2 md:py-4 space-y-4">
          <TermItem id="general"
            title={t("page.tos.items.general.title")}
            items={[
              t("page.tos.items.general.items.p1"),
              t("page.tos.items.general.items.p2"),
            ]} />
          <TermItem id="payments"
            title={t("page.tos.items.payments.title")}
            items={[
              t("page.tos.items.payments.items.p1"),
              t("page.tos.items.payments.items.p2"),
            ]} />
          <TermItem id="revisions-requests"
            title={t("page.tos.items.revisions-requests.title")}
            items={[
              t("page.tos.items.revisions-requests.items.p1"),
              t("page.tos.items.revisions-requests.items.p2"),
              t("page.tos.items.revisions-requests.items.p3"),
              t("page.tos.items.revisions-requests.items.p4"),
              t("page.tos.items.revisions-requests.items.p5"),
            ]} />
          <TermItem id="deadlines-delivery"
            title={t("page.tos.items.deadlines-delivery.title")}
            items={[
              t("page.tos.items.deadlines-delivery.items.p1"),
              t("page.tos.items.deadlines-delivery.items.p2"),
            ]} />
        </div>

        <div className="py-4 space-y-4">
          <TermItem id="property-rights"
            title={t("page.tos.items.property-rights.title")}
            items={[
              t("page.tos.items.property-rights.items.p1"),
              t("page.tos.items.property-rights.items.p2"),
              t("page.tos.items.property-rights.items.p3"),
              t("page.tos.items.property-rights.items.p4"),
              t("page.tos.items.property-rights.items.p5"),
              t("page.tos.items.property-rights.items.p6"),
              t("page.tos.items.property-rights.items.p7"),
              t("page.tos.items.property-rights.items.p8"),
            ]} />
          <TermItem id="refunds"
            title={t("page.tos.items.refunds.title")}
            items={[
              t("page.tos.items.refunds.items.p1"),
            ]} />
          <TermItem id="communication"
            title={t("page.tos.items.communication.title")}
            items={[
              t("page.tos.items.communication.items.p1"),
              t("page.tos.items.communication.items.p2"),
            ]} />

          <p>{t("page.tos.caption")}</p>
        </div>
      </div>
    </div>

    <div className="w-full mt-6">
      <div className="lg:w-[75vw] grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-2 md:gap-6 mx-auto">

        <MiniBlob id="c3" type="WillDo" className="fill-blob-cyan"
          viewport="0.625 -69.89789581298828 225 96.0047607421875" hardcoded
          title={t("page.will-do.title")}>

            <div className="flex w-full h-full absolute items-end">
              <FloatImage left
                width={70} height={70} 
                xOffset={-40} yOffset={65}
                src={images.flowers.flower_pink_1} />
              <FloatImage left
                width={45} height={45} 
                xOffset={60} yOffset={15}
                src={images.flowers.flower_green_5P} />
            </div>

            <p>{t("page.will-do.items.p1")}</p>
            <p>{t("page.will-do.items.p2")}</p>
            <p>{t("page.will-do.items.p3")}</p>
            <p>{t("page.will-do.items.p4")}</p>
            <p>{t("page.will-do.items.p5")}</p>
            <p>{t("page.will-do.items.p6")}</p>
        </MiniBlob>

        <MiniBlob id="c4" type="WontDo" className="fill-blob-pink"
          viewport="0.625 -69.89789581298828 225 98.0047607421875" hardcoded
          title={t("page.wont-do.title")}>

            <div className="flex w-full h-full absolute">
              <FloatImage right
                width={70} height={70} 
                xOffset={-25} yOffset={-85}
                src={images.flowers.flower_green_beeg} />
            </div>

            <p>{t("page.wont-do.items.p1")}</p>
            <p>{t("page.wont-do.items.p2")}</p>
            <p>{t("page.wont-do.items.p3")}</p>
            <p>{t("page.wont-do.items.p4")}</p>
        </MiniBlob>
      </div>

      <div className="md:w-[75vw] px-8 mt-6 sm:mt-12 mb-12 mx-auto">
        <BeegBlob id="c5" className="fill-blob-olive" title={t("page.rules.title")}
          viewport="0.625 -57.97426223754883 225 80.87842559814453" hardcoded>

            <div className="flex w-full h-full absolute -z-10">
              <FloatImage right
                width={70} height={70} 
                xOffset={-120} yOffset={-80}
                src={images.flowers.flower_white_2} />
              <FloatImage right
                width={70} height={70} 
                xOffset={-55} yOffset={-35}
                src={images.flowers.flower_pink_1} />
            </div>

            <div className="flex w-full h-full absolute items-end -z-10">
              <FloatImage left
                width={85} height={85} 
                xOffset={20} yOffset={-40}
                src={images.flowers.flower_green_5P} />
            </div>

            <p>{t("page.rules.subtitle")}</p>
            <p className="font-bold">{t("page.rules.caption")}</p>
            <p className="mt-4">{t("page.rules.items.p1")}</p>
            <p>{t("page.rules.items.p2")}</p>
            <p>{t("page.rules.items.p3")}</p>
            <p>{t("page.rules.items.p4")}</p>
        </BeegBlob>
      </div>
    </div>
  </>);
};

const PageType = ({ className = "", children, left, right, onClick = () => {} }) => {
  return (
    <div className={`${className} relative w-full aspect-square bg-font rounded-3xl cursor-pointer text-white px-3 py-4 font-medium hover:font-bold hover:outline-2 hover:outline-offset-2 hover:outline-button-hover`}
      onClick={onClick}> 
      {
        left && <>
          <div className="flex w-full h-full absolute items-center">
            <FloatImage left
              width={60} height={60} 
              xOffset={40} yOffset={-135}
              src={images.flowers.flower_pink_1} />
            <FloatImage left
              width={50} height={50} 
              xOffset={95} yOffset={-85}
              src={images.flowers.flower_green_small} />
            <FloatImage left
              width={60} height={60} 
              xOffset={20} yOffset={55}
              src={images.flowers.flower_white_1} />
            <FloatImage left
              width={45} height={45} 
              xOffset={55} yOffset={125}
              src={images.sparkles.sparkle_cyan_small} />
          </div>
          
          <div className="flex md:hidden w-full h-full absolute justify-center items-center">
            <FloatImage right
              width={60} height={60} 
              xOffset={35} yOffset={-165}
              src={images.flowers.flower_green_beeg} />
            <FloatImage right
              width={60} height={60} 
              xOffset={55} yOffset={-85}
              src={images.flowers.flower_white_2} />
            <FloatImage right
              width={60} height={60} 
              xOffset={45} yOffset={55}
              src={images.sparkles.sparkle_cyan_big} />
            <FloatImage right
              width={50} height={50} 
              xOffset={20} yOffset={145}
              src={images.flowers.flower_pink_2} />
          </div>
        </>
      }

      {
        right && <>
          <div className="flex md:hidden w-full h-full absolute items-center">
            <FloatImage left
              width={60} height={60} 
              xOffset={40} yOffset={-135}
              src={images.flowers.flower_green_beeg} />
            <FloatImage left
              width={50} height={50} 
              xOffset={95} yOffset={-85}
              src={images.flowers.flower_white_2} />
            <FloatImage left
              width={60} height={60} 
              xOffset={20} yOffset={55}
              src={images.sparkles.sparkle_cyan_big} />
            <FloatImage left
              width={45} height={45} 
              xOffset={55} yOffset={125}
              src={images.flowers.flower_pink_2} />
          </div>
          
          <div className="flex md:hidden w-full h-full absolute justify-center items-center">
            <FloatImage className="hidden sm:block" right
              width={60} height={60} 
              xOffset={35} yOffset={-165}
              src={images.flowers.flower_pink_1} />
            <FloatImage right
              width={60} height={60} 
              xOffset={45} yOffset={-85}
              src={images.flowers.flower_green_small} />
            <FloatImage right
              width={60} height={60} 
              xOffset={45} yOffset={55}
              src={images.flowers.flower_white_1} />
            <FloatImage className="hidden xs:block" right
              width={50} height={50} 
              xOffset={20} yOffset={145}
              src={images.sparkles.sparkle_cyan_small} />
          </div>

          <div className="hidden md:flex w-full h-full absolute justify-center items-center">
            <FloatImage right
              width={60} height={60} 
              xOffset={35} yOffset={-165}
              src={images.flowers.flower_green_beeg} />
            <FloatImage right
              width={60} height={60} 
              xOffset={55} yOffset={-85}
              src={images.flowers.flower_white_2} />
            <FloatImage right
              width={60} height={60} 
              xOffset={45} yOffset={55}
              src={images.sparkles.sparkle_cyan_big} />
            <FloatImage right
              width={50} height={50} 
              xOffset={20} yOffset={145}
              src={images.flowers.flower_pink_2} />
          </div>
        </>
      }

      <div className="flex items-baseline space-x-2 text-4xl">
        {children}
      </div>
    </div>
  );
};

const TermItem = ({ id = "", title = "", items = [] }) => {
  return (
    <div className="">
      <h3 className="uppercase text-bold-pink  font-bold">{title}</h3>
      {
        items && items.map((item, x) => 
          <p className="space-x-1" key={`${id}.${x}`}>
            <span className="inline-flex items-baseline">
              <img className="w-4 h-4 translate-y-0.5 select-none"  
                src={images.sparkles.sparkle_cyan_small} alt="" /> 
            </span>
            <span>{item}</span>
          </p>)
      }
    </div>
  );
};

const MiniBlob = ({  id = "c1", className = "", children,
    title = "", viewport = "", type = "WillDo" }) => {

  return (
    <BlobContainer className={`${className} relative`} 
      content="w-fit pt-2 pb-4 space-y-2 flex flex-col items-center mx-auto"
      type={type}>

      <WaveText id={id}
        className="w-full h-10 font-extrabold fill-bold-pink text-6xl" 
        alignment="middle" anchor="middle" offset="-1px" 
        viewport={viewport}
        value={title} />

      <div className="w-2/3 sm:w-4/5 md:w-2/3 flex flex-col items-center text-center text-sm relative">
        {children}
      </div>
    </BlobContainer>
  );
};

const BeegBlob = ({ id = "beeg_c5", className = "", children,
  title = "", viewport = "" }) => {

  return (
    <BlobContainer className={`${className} w-full relative`} 
      content="px-2 pt-18 pb-28 space-y-2"
      type="GreenBeeg">

      <div className="w-full flex flex-col items-center">
        <Sparkles className="w-8 h-8 z-10 fill-olive -translate-y-2" stars={2} />
        <WaveText id={id} 
          className="w-full h-8 font-extrabold fill-bold-pink text-8xl" 
          alignment="middle" anchor="middle" offset="0px"
          viewport={viewport} 
          value={title} />
      </div>

      <div className="px-4 py-2 flex flex-col text-lg text-sm space-y-2 relative">
        {children}
      </div>
    </BlobContainer>
  );
};

export default Commissions;
