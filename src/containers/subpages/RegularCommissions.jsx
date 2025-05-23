import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useTranslation, Trans } from "react-i18next";
import { useCallback, useRef, Fragment, useState } from "react";

import { FloatImage } from "../../components/layouts/FloatContainer";
import { BlobBackground } from "../../components/customs/BlobBackground";
import BlobContainer from "../../components/layouts/BlobContainer";
import Sparkles from "../../components/effects/Sparkles";
import WaveText from "../../components/effects/WaveText";
import GalleryItem from "../../components/customs/GalleryItem";

import Viewport from "../modals/Viewport";

const RegularCommissions = () => {
  const { t } = useTranslation([ns.regular, ns.common]);
  const [image, setImage] = useState(false);
  const containerRef = useRef(null);

  const handleZoom = useCallback((value, e) => {
    e.preventDefault();
    setImage(value);
  }, []);

  return (<>
    { image && <Viewport image={image} setImage={setImage} /> }

    <BlobBackground className="w-full min-h-120" containerRef={containerRef} />

    <div className="relative flex flex-col items-center" ref={containerRef}>

      <WorkType i18n="regular" t={t} hardcoded
        viewport="0.625 -22.753162384033203 225 35.71244430541992" >

        <CommissionCaption t={t}>
          <Trans i18nKey="main.regular.caption" t={t}>
            <span className="font-bold text-light-cyan"></span>
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

      <WorkType i18n="commercial" t={t} hardcoded
        viewport="0.625 -22.35525131225586 225 35.4124870300293">

        <CommissionCaption t={t}>
          <Trans i18nKey="main.commercial.caption" t={t}>
            <span className="font-bold text-font-soft"></span>
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

      <div className="w-[75vw] px-6 pt-6 pb-14 mx-auto hidden">
        <BlobContainer className="w-full fill-blob-olive" 
          content="px-12 pt-6 pb-20 -space-y-2">

          <div className="w-full flex flex-col items-center -space-y-2">
            <Sparkles className="w-8 h-8 z-10 fill-olive" stars={2} />
            <WaveText className="w-full h-20 font-extrabold fill-font-bold text-3xl" id="c3" 
              viewport="0.625 -57.97426223754883 225 80.87842559814453" 
              alignment="middle" anchor="middle" size="2" offset="0px"
              value={t("main.information.title")} />
          </div>

          <div className="w-[55vw] flex flex-col text-lg text-sm">
            <p><span className="text-font-bold font-bold mr-2">+</span>{t("main.information.items.p1")}</p>
            <p><span className="text-font-bold font-bold mr-2">+</span>{t("main.information.items.p2")}</p>
            <p><span className="text-font-bold font-bold mr-2">+</span>{t("main.information.items.p3")}</p>
            <p><span className="text-font-bold font-bold mr-2">+</span>
              <Trans i18nKey="main.information.items.p4" t={t}>
                <span className="font-bold text-font-soft"></span>
              </Trans>
            </p>
            <p><span className="text-font-bold font-bold mr-2">+</span>{t("main.information.items.p5")}</p>
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
  i18n = "", type = "", inverse, items = [], caption }) => {

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

export default RegularCommissions;
