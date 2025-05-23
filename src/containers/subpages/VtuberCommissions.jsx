import routes from "../../settings/routes/frontend.routes";
import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useCallback, useRef, Fragment, useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

import { FloatImage } from "../../components/layouts/FloatContainer";
import { BlobBackground } from "../../components/customs/BlobBackground";
import BlobContainer from "../../components/layouts/BlobContainer";
import Sparkles from "../../components/effects/Sparkles";
import WaveText from "../../components/effects/WaveText";
import GalleryItem from "../../components/customs/GalleryItem";

import Viewport from "../modals/Viewport";

const VtuberCommissions = () => {

  const { t } = useTranslation([ns.vtuber, ns.common]);
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

      <WorkType i18n="vtuber" t={t} hardcoded
        viewport="0.625 -23.228713989257812 225 36.18302536010742" >

        <CommissionCaption t={t}>
          <Trans i18nKey="main.vtuber.caption" t={t}>
            <span className="font-bold text-font-soft"></span>
          </Trans>
        </CommissionCaption>

        <div className="px-4 xs:px-8 lg:px-16 space-y-10">
          <CommissionType i18n="live2d-model" type="vtuber" t={t} 
            subtypes={[ "p1", "p2", "p3" ]}
            items={[ "p1", "p2", "p3", "p4", "p5"]}
            includes>
              
            <CommissionItem className="md:order-first xs:col-span-3 h-120" onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem className="hidden md:block" onClick={(e) => handleZoom(null, e)} />
            <CommissionItem className="hidden md:block" onClick={(e) => handleZoom(null, e)} />
          </CommissionType>

          <CommissionType i18n="chibi-model-a" type="vtuber" t={t} 
            items={[ "p1", "p2", "p3", "p4", "p5" ]}
            includes>

            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
          </CommissionType>

          <CommissionType i18n="chibi-model-b" type="vtuber" t={t} 
            items={[ "p1", "p2", "p3", "p4", "p5" ]}
            includes>

            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
            <CommissionItem onClick={(e) => handleZoom(null, e)} />
          </CommissionType>
        </div>
      </WorkType>

      <div className="px-1 sm:px-6 pt-14 pb-14 mx-auto">
        <BlobContainer className="w-full fill-blob-pink" 
          content="sm:px-12 pt-6 pb-20 space-y-4">

          <div className="px-2 w-full sm:w-2/3 flex flex-col items-center -space-y-2">
            <Sparkles className="w-8 h-8 z-10 fill-olive" stars={2} />
            <WaveText className="w-full h-12 font-extrabold fill-font-bold text-4xl" id="c3" 
              viewport="0.625 -33.695411682128906 225 50.19906997680664" hardcoded
              alignment="middle" anchor="middle" size="1" offset="0px"
              value={t("main.information.title")} />
          </div>

          <div className="px-2 w-full sm:w-2/3 flex flex-col text-lg text-sm">
            <p><span className="text-font-bold font-bold mr-2">+</span>{t("main.information.items.p1")}</p>
            <p><span className="text-font-bold font-bold mr-2">+</span>
              <Trans i18nKey="main.information.items.p2" t={t}>
                <span className="font-bold text-font-soft"></span>
              </Trans>
            </p>
            <p><span className="text-font-bold font-bold mr-2">+</span>{t("main.information.items.p3")}</p>
            <p className="text-center mt-8">{t("main.information.thank-you")}</p>
          </div>
        </BlobContainer>
      </div>
    </div>
  </>);
};

const WorkType = ({ i18n = "regular", t, viewport, hardcoded, children }) => {

  return (<>
    <div className="px-2 pt-8 w-full flex flex-col items-center overflow-hidden">
      <Sparkles className="w-16 h-16 z-10 fill-font translate-y-4" stars={3} />
      <WaveText className="w-full h-20 font-extrabold fill-font-bold text-xl md:text-2xl" id={`${i18n}_wave`}
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
      <h2 className="text-font-bold font-bold text-3xl">{t("main.terms.exclamation")}</h2>
      <h3 className="px-4 -translate-y-1 text-sm text-center whitespace-pre-line">
        {children}
      </h3>
    </div>
  );
};

const CommissionType = ({ t, children, 
  i18n = "", type = "", items = [], 
  inverse, caption, includes }) => {

  return (
    <div className="grid xs:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-2 lg:gap-x-3 items-center">

      <div className={`px-4 lg:px-8 space-y-3 text-sm xs:col-span-3 md:col-span-2 ${inverse ? "md:order-last" : ""}`}>
        <div className="">
          <h3 className="text-font-bold font-medium text-2xl">{t(`main.${type}.items.${i18n}.title`)}</h3>
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
        { includes && 
          <p className="whitespace-pre-line">{t(`main.${type}.items.${i18n}.include`)}</p>
        }
      </div>

      { children }

    </div>
  );
};

const CommissionItem = ({ className = "", onClick = () => {} }) => {
  return (
    <GalleryItem className={`${className} w-full min-h-80 mx-auto`} selectable 
      onClick={(e) => onClick(null, e)} />
  );
};

export default VtuberCommissions;
