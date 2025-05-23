import routes from "../../settings/routes/frontend.routes";
import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCallback, useRef } from "react";

import BlobContainer from "../../components/layouts/BlobContainer";
import { FloatImage } from "../../components/layouts/FloatContainer";
import WaveContainer from "../../components/layouts/WaveContainer";
import Sparkles from "../../components/effects/Sparkles";
import WaveText from "../../components/effects/WaveText";
import { BlobHeader } from "../../components/customs/BlobBackground";

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
      <WaveText className="w-full h-20 font-extrabold fill-font-bold text-3xl xs:text-4xl" id="c1" 
        viewport="0.625 -34.98773193359375 225 51.59220504760742" hardcoded
        alignment="middle" anchor="middle" size="1" offset="0px"
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
        <h2 className="text-font-bold font-bold text-3xl">{t("main.exclamation")}</h2>
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
        <WaveText className="w-full h-10 font-extrabold fill-font-bold text-xl" id="c2" 
          viewport="0.625 -17.61100196838379 225 29.448198318481445" hardcoded
          alignment="middle" anchor="middle" size="1" offset="0px"
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

    <div className="w-full mt-2">
      <div className="w-[75vw] grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        <BlobContainer className="w-full fill-blob-cyan" 
          content="px-12 pt-6 pb-10 space-y-2"
          type="WillDo">

          <WaveText className="w-full h-10 font-extrabold fill-font-bold text-6xl" id="c3" 
            viewport="0.625 -69.89789581298828 225 96.0047607421875" hardcoded
            alignment="middle" anchor="middle" size="1" offset="0" 
            value={t("page.will-do.title")} />

          <div className="w-2/3 flex flex-col items-center text-center text-sm">
            <p>{t("page.will-do.items.p1")}</p>
            <p>{t("page.will-do.items.p2")}</p>
            <p>{t("page.will-do.items.p3")}</p>
            <p>{t("page.will-do.items.p4")}</p>
            <p>{t("page.will-do.items.p5")}</p>
            <p>{t("page.will-do.items.p6")}</p>
          </div>
        </BlobContainer>

        <BlobContainer className="w-full fill-blob-pink" 
          content="px-12 pt-6 pb-10 space-y-2"
          type="WontDo">

          <WaveText className="w-full h-10 font-extrabold fill-font-bold text-6xl" id="c4" 
            viewport="0.625 -69.89789581298828 225 96.0047607421875" hardcoded
            alignment="middle" anchor="middle" size="1" offset="0"
            value={t("page.wont-do.title")} />

          <div className="w-2/3 flex flex-col items-center text-center text-sm">
            <p>{t("page.wont-do.items.p1")}</p>
            <p>{t("page.wont-do.items.p2")}</p>
            <p>{t("page.wont-do.items.p3")}</p>
            <p>{t("page.wont-do.items.p4")}</p>
          </div>
        </BlobContainer>
      </div>

      <div className="w-[75vw] p-6 mx-auto">
        <BlobContainer className="w-full fill-blob-olive" 
          content="px-12 pt-6 pb-20 space-y-2">

          <div className="w-full flex flex-col items-center -space-y-2">
            <Sparkles className="w-8 h-8 z-10 fill-olive" stars={2} />
            <WaveText className="w-full h-12 font-extrabold fill-font-bold text-6xl" id="c5" 
              viewport="0.625 -57.97426223754883 225 80.87842559814453" hardcoded
              alignment="middle" anchor="middle" size="1" offset="-25px"
              value={t("page.rules.title")} />
          </div>

          <div className="w-[55vw] flex flex-col text-lg text-sm">
            <p>{t("page.rules.subtitle")}</p>
            <p className="font-bold">{t("page.rules.caption")}</p>

            <p className="mt-4">{t("page.rules.items.p1")}</p>
            <p>{t("page.rules.items.p2")}</p>
            <p>{t("page.rules.items.p3")}</p>
            <p>{t("page.rules.items.p4")}</p>
          </div>
        </BlobContainer>
      </div>

    </div>
  </>);
};

const PageType = ({ className = "", children, left, right, onClick = () => {} }) => {
  return (
    <div className={`${className} relative w-full aspect-square bg-font rounded-3xl cursor-pointer text-white px-3 py-4 font-medium hover:font-bold`}
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
      <h3 className="uppercase text-font-bold font-bold">{title}</h3>
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

export default Commissions;
