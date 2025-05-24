import routes from "../../settings/routes/frontend.routes";
import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useCallback, useRef, Fragment, useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

import { BlobBackground } from "../../components/customs/BlobBackground";
import { GalleryItem } from "../../components/customs/ImagePreview";
import { FloatImage } from "../../components/layouts/FloatContainer";
import BlobContainer from "../../components/layouts/BlobContainer";
import Sparkles from "../../components/effects/Sparkles";
import WaveText from "../../components/effects/WaveText";

import Viewport from "../modals/Viewport";

const RegularCommissions = () => {

  const { t } = useTranslation([ns.regular, ns.common]);
  const [scroll, setScroll] = useState(null);
  const [image, setImage] = useState(false);
  const containerRef = useRef(null);

  const handleZoom = useCallback((value, e) => {
    e.preventDefault();
    setImage(value);
  }, []);

  useEffect(() => {
    if (scroll) {
      const element = document.querySelector(scroll);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setScroll(null);
      }
    }
  }, [scroll]);

  return (<>
    { image && <Viewport image={image} setImage={setImage} /> }

    <BlobBackground className="w-full min-h-120" containerRef={containerRef} />

    <div className="relative flex flex-col items-center" ref={containerRef}>

      <WorkType i18n="regular" t={t} hardcoded
        viewport="0.625 -23.380739212036133 225 36.51387023925781" >

        <CommissionCaption t={t}>
          <Trans i18nKey="main.regular.caption" t={t}>
            <span className="font-bold text-light-cyan cursor-pointer" 
              onClick={() => setScroll(`#commercial-link`)}></span>
          </Trans>
        </CommissionCaption>

        <div className="px-4 xs:px-8 lg:px-16 space-y-10">
          <CommissionType i18n="chibis" type="regular" t={t} 
            items={[ "p1", "p2" ]} 
            caption inverse>
              
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
          </CommissionType>

          <CommissionType i18n="bust" type="regular" t={t} 
            items={[ "p1", "p2", "p3" ]}>

            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
          </CommissionType>

          <CommissionType i18n="halfbody" type="regular" t={t} 
            items={[ "p1", "p2", "p3" ]} 
            caption>

            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
          </CommissionType>

          <CommissionType i18n="fullbody" type="regular" t={t} 
            items={[ "p1", "p2", "p3" ]} 
            caption>

            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
          </CommissionType>
        </div>
      </WorkType>

      <div id="commercial-link" className="py-4" />

      <WorkType i18n="commercial" t={t} hardcoded
        viewport="0.625 -22.35525131225586 225 35.4124870300293">

        <CommissionCaption t={t}>
          <Trans i18nKey="main.commercial.caption" t={t}>
            <span className="font-bold text-soft-pink "></span>
          </Trans>
        </CommissionCaption>

        <div className="px-4 xs:px-8 lg:px-16 space-y-10">
          <CommissionType i18n="emotes" type="commercial" t={t} 
            items={[ "p1", "p2", "p3" ]} 
            inverse>

            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
          </CommissionType>

          <CommissionType i18n="alerts" type="commercial" t={t} 
            items={[ "p1", "p2" ]} 
            inverse>

            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
          </CommissionType>
        </div>
      </WorkType>

      <div className="px-1 sm:px-6 pt-14 pb-14 mx-auto">
        <BeegBlob id="c5" className="fill-blob-olive" title={t("main.information.title")}
          viewport="0.625 -33.695411682128906 225 50.19906997680664" hardcoded>

          <p><span className="text-bold-pink  font-bold mr-2">+</span>{t("main.information.items.p1")}</p>
          <p><span className="text-bold-pink  font-bold mr-2">+</span>{t("main.information.items.p2")}</p>
          <p><span className="text-bold-pink  font-bold mr-2">+</span>{t("main.information.items.p3")}</p>
          <p><span className="text-bold-pink  font-bold mr-2">+</span>
            <Trans i18nKey="main.information.items.p4" t={t}>
              <span className="font-bold text-soft-pink "></span>
            </Trans>
          </p>
          <p><span className="text-bold-pink  font-bold mr-2">+</span>{t("main.information.items.p5")}</p>
          <p className="text-center mt-8">{t("main.information.thank-you")}</p>
        </BeegBlob>
      </div>
    </div>
  </>);
};

const WorkType = ({ i18n = "regular", t, viewport, hardcoded, children }) => {

  return (<>
    <div className="px-2 pt-8 w-full flex flex-col items-center overflow-hidden">
      <Sparkles className="w-16 h-16 z-10 fill-font translate-y-4" stars={3} />
      <WaveText className="w-full h-20 font-extrabold fill-bold-pink  text-xl md:text-2xl" id={`${i18n}_wave`}
        alignment="middle" anchor="middle" size="1" offset="0px"
        viewport={viewport} hardcoded={hardcoded}
        value={t(`main.${i18n}.title`)} />
    </div>

    <div className="flex font-bold text-sm justify-center items-center space-x-2 -translate-y-2 md:translate-y-0">
      <Trans i18nKey={`main.${i18n}.subtitle`} t={t}>
        <span className="justify-self-end"></span>
        <Sparkles className="w-6 h-6 z-10 fill-olive" stars={2} />
        <span className="justify-self-start"></span>
      </Trans>
    </div>

    {children}
  </>);
};

const CommissionCaption = ({ children, t }) => {
  return (
    <div className="pt-8 pb-8 md:pb-14 flex flex-col items-center overflow-hidden">
      <h2 className="text-bold-pink  font-bold text-3xl">{t("main.terms.exclamation")}</h2>
      <h3 className="px-4 -translate-y-1 text-sm text-center whitespace-pre-line">
        {children}
      </h3>
    </div>
  );
};

const CommissionType = ({ t, children, 
  i18n = "", type = "", inverse, items = [], caption }) => {

  return (
    <div className="grid xs:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-2 lg:gap-x-3 items-center">

      <div className={`px-4 lg:px-8 space-y-3 text-sm xs:col-span-3 md:col-span-2 ${inverse ? "md:order-last" : ""}`}>
        <div className="">
          <h3 className="text-bold-pink  font-medium text-2xl">{t(`main.${type}.items.${i18n}.title`)}</h3>
          <h4 className="font-bold relative flex items-center -translate-y-1">
            <Sparkles className="w-4 h-4 z-10 fill-olive mr-1" stars={2} />
            <span>{t(`main.${type}.items.${i18n}.subtitle`)}</span>
          </h4>
        </div>

        <h5 className="-mt-1">{t(`main.${type}.items.${i18n}.details`)}</h5>

        {items && items.length > 0 && <>
          <div className="px-2 md:px-6 grid grid-cols-3 gap-0">
            <div className="font-bold col-span-2">
              {t(`main.${type}.items.${i18n}.terms.label`)}
            </div>
            <div className="font-bold">
              {t(`main.${type}.items.${i18n}.terms.value`)}
            </div>

            { items.map((item, i) => 
              <Fragment key={`${i18n}_${i}`}>
                <div className="col-span-2">
                  {t(`main.${type}.items.${i18n}.items.${item}.label`)}
                </div>
                <div className="">
                  {t(`main.${type}.items.${i18n}.items.${item}.value`)}
                </div>
              </Fragment>
            )}
          </div>
        </>}

        <p className="whitespace-pre-line">{t(`main.${type}.items.${i18n}.explanation`)}</p>
        { caption && 
          <p className="whitespace-pre-line">
            <Trans i18nKey={`main.${type}.items.${i18n}.caption`} t={t}>
              <span className="font-bold"></span>
            </Trans>
          </p>
        }
      </div>

      { children }

    </div>
  );
};

const CommissionItem = ({ onClick = () => {} }) => {
  return (
    <GalleryItem className="w-full h-80 mx-auto" selectable 
      onClick={(e) => onClick(null, e)} />
  );
};

const BeegBlob = ({ id = "beeg_c5", className = "", title = "", children,
    viewport, hardcoded }) => {

  return (
    <BlobContainer className={`${className} w-full`} 
      content="px-2 pt-18 pb-28 space-y-2"
      type="GreenBeeg" ratio="slice">

      <div className="w-full flex flex-col items-center">
        <Sparkles className="w-8 h-8 z-10 fill-olive translate-y-2" stars={2} />
        <WaveText className="w-full h-12 font-extrabold fill-bold-pink  text-4xl" id={id} 
          viewport={viewport} hardcoded={hardcoded}
          alignment="middle" anchor="middle" size="1" offset="0px"
          value={title} />
      </div>

      <div className="sm:w-4/5 px-4 py-2 flex flex-col text-lg text-sm space-y-0 relative">

        <div className="flex w-full h-full absolute -z-10">
          <FloatImage right
            width={70} height={70} 
            xOffset={-90} yOffset={-80}
            src={images.flowers.flower_white_2} />
          <FloatImage right
            width={70} height={70} 
            xOffset={-25} yOffset={-35}
            src={images.flowers.flower_pink_1} />
        </div>

        <div className="flex w-full h-full absolute items-end -z-10">
          <FloatImage left
            width={85} height={85} 
            xOffset={40} yOffset={-40}
            src={images.flowers.flower_green_5P} />
        </div>

        {children}
      </div>
    </BlobContainer>
  );
};

export default RegularCommissions;
