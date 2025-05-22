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

      {/* #######
          REGULAR 
          ####### */}

      <div className="pt-8 w-full flex flex-col items-center">
        <Sparkles className="w-16 h-16 z-10 fill-font translate-y-12" stars={3} />
        <WaveText className="w-full h-32 font-extrabold fill-font-bold text-2xl" id="c1" 
          viewport="0.625 -34.98773193359375 225 51.59220504760742" hardcoded
          alignment="middle" anchor="middle" size="1" offset="0px"
          value={t("main.regular.title")} />
      </div>

      <div className="grid grid-cols-3 font-bold text-sm justify-items-center items-center">
        <Trans i18nKey="main.regular.subtitle" t={t}>
          <span className="justify-self-end"></span>
          <Sparkles className="w-6 h-6 z-10 fill-olive" stars={2} />
          <span className="justify-self-start"></span>
        </Trans>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-font-bold font-bold text-3xl">{t("main.regular.exclamation")}</h2>
        <h3 className="px-2 -translate-y-1 text-sm text-center whitespace-pre-line">
          <Trans i18nKey="main.regular.caption" t={t}>
            <span className="font-bold text-light-cyan"></span>
          </Trans>
        </h3>
      </div>

      <div className="px-24">
        <CommissionItem id="chibis" t={t} inverse
          className="grid grid-cols-5 gap-2" 
          i18nTitle="main.regular.items.chibis.title"
          i18nSubtitle="main.regular.items.chibis.subtitle"
          i18nDetails="main.regular.items.chibis.details"
          i18nLabel="main.regular.items.chibis.terms.label"
          i18nValue="main.regular.items.chibis.terms.value"
          i18nItems={[
            { 
              label: "main.regular.items.chibis.items.p1.label",
              value: "main.regular.items.chibis.items.p1.value",
            },
            { 
              label: "main.regular.items.chibis.items.p2.label",
              value: "main.regular.items.chibis.items.p2.value",
            },
          ]}
          i18nExplanation="main.regular.items.chibis.explanation"
          i18nCaption="main.regular.items.chibis.caption"
        >
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
        </CommissionItem>

        <CommissionItem id="bust" t={t} 
          className="grid grid-cols-5 gap-2" 
          i18nTitle="main.regular.items.bust.title"
          i18nSubtitle="main.regular.items.bust.subtitle"
          i18nDetails="main.regular.items.bust.details"
          i18nLabel="main.regular.items.bust.terms.label"
          i18nValue="main.regular.items.bust.terms.value"
          i18nItems={[
            { 
              label: "main.regular.items.bust.items.p1.label",
              value: "main.regular.items.bust.items.p1.value",
            },
            { 
              label: "main.regular.items.bust.items.p2.label",
              value: "main.regular.items.bust.items.p2.value",
            },
            { 
              label: "main.regular.items.bust.items.p3.label",
              value: "main.regular.items.bust.items.p3.value",
            },
          ]}
          i18nExplanation="main.regular.items.bust.explanation"
        >
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
        </CommissionItem>

        <CommissionItem id="halfbody" t={t} 
          className="grid grid-cols-5 gap-2" 
          i18nTitle="main.regular.items.halfbody.title"
          i18nSubtitle="main.regular.items.halfbody.subtitle"
          i18nDetails="main.regular.items.halfbody.details"
          i18nLabel="main.regular.items.halfbody.terms.label"
          i18nValue="main.regular.items.halfbody.terms.value"
          i18nItems={[
            { 
              label: "main.regular.items.halfbody.items.p1.label",
              value: "main.regular.items.halfbody.items.p1.value",
            },
            { 
              label: "main.regular.items.halfbody.items.p2.label",
              value: "main.regular.items.halfbody.items.p2.value",
            },
            { 
              label: "main.regular.items.halfbody.items.p3.label",
              value: "main.regular.items.halfbody.items.p3.value",
            },
          ]}
          i18nExplanation="main.regular.items.halfbody.explanation"
          i18nCaption="main.regular.items.halfbody.caption"
        >
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
        </CommissionItem>

        <CommissionItem id="fullbody" t={t} 
          className="grid grid-cols-5 gap-2" 
          i18nTitle="main.regular.items.fullbody.title"
          i18nSubtitle="main.regular.items.fullbody.subtitle"
          i18nDetails="main.regular.items.fullbody.details"
          i18nLabel="main.regular.items.fullbody.terms.label"
          i18nValue="main.regular.items.fullbody.terms.value"
          i18nItems={[
            { 
              label: "main.regular.items.fullbody.items.p1.label",
              value: "main.regular.items.fullbody.items.p1.value",
            },
            { 
              label: "main.regular.items.fullbody.items.p2.label",
              value: "main.regular.items.fullbody.items.p2.value",
            },
            { 
              label: "main.regular.items.fullbody.items.p3.label",
              value: "main.regular.items.fullbody.items.p3.value",
            },
          ]}
          i18nExplanation="main.regular.items.fullbody.explanation"
          i18nCaption="main.regular.items.fullbody.caption"
        >
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
        </CommissionItem>
      </div>

    {/* ##########
        COMMERCIAL 
        ########## */}

     <div className="pt-8 w-full flex flex-col items-center">
        <Sparkles className="w-16 h-16 z-10 fill-font translate-y-12" stars={3} />
        <WaveText className="w-full h-32 font-extrabold fill-font-bold text-2xl" id="c2" 
          viewport="0.625 -34.98773193359375 225 51.59220504760742" hardcoded
          alignment="middle" anchor="middle" size="1" offset="0px"
          value={t("main.commercial.title")} />
      </div>

      <div className="grid grid-cols-3 font-bold text-sm justify-items-center items-center">
        <Trans i18nKey="main.commercial.subtitle" t={t}>
          <span className="justify-self-end"></span>
          <Sparkles className="w-6 h-6 z-10 fill-olive" stars={2} />
          <span className="justify-self-start"></span>
        </Trans>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-font-bold font-bold text-3xl">{t("main.commercial.exclamation")}</h2>
        <h3 className="px-2 -translate-y-1 text-sm text-center whitespace-pre-line">
          <Trans i18nKey="main.commercial.caption" t={t}>
            <span className="font-bold text-font-bold"></span>
          </Trans>
        </h3>
      </div>

      <div className="px-24">
        <CommissionItem id="emotes" t={t} inverse
          className="grid grid-cols-5 gap-2" 
          i18nTitle="main.commercial.items.emotes.title"
          i18nSubtitle="main.commercial.items.emotes.subtitle"
          i18nDetails="main.commercial.items.emotes.details"
          i18nLabel="main.commercial.items.emotes.terms.label"
          i18nValue="main.commercial.items.emotes.terms.value"
          i18nItems={[
            { 
              label: "main.commercial.items.emotes.items.p1.label",
              value: "main.commercial.items.emotes.items.p1.value",
            },
            { 
              label: "main.commercial.items.emotes.items.p2.label",
              value: "main.commercial.items.emotes.items.p2.value",
            },
            { 
              label: "main.commercial.items.emotes.items.p3.label",
              value: "main.commercial.items.emotes.items.p3.value",
            },
          ]}
          i18nExplanation="main.commercial.items.emotes.explanation"
        >
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
        </CommissionItem>

        <CommissionItem id="alerts" t={t} inverse
          className="grid grid-cols-5 gap-2" 
          i18nTitle="main.commercial.items.alerts.title"
          i18nSubtitle="main.commercial.items.alerts.subtitle"
          i18nDetails="main.commercial.items.alerts.details"
          i18nLabel="main.commercial.items.alerts.terms.label"
          i18nValue="main.commercial.items.alerts.terms.value"
          i18nItems={[
            { 
              label: "main.commercial.items.alerts.items.p1.label",
              value: "main.commercial.items.alerts.items.p1.value",
            },
            { 
              label: "main.commercial.items.alerts.items.p2.label",
              value: "main.commercial.items.alerts.items.p2.value",
            },
          ]}
          i18nExplanation="main.commercial.items.alerts.explanation"
        >
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
          <GalleryItem className="w-full h-70" selectable 
            onClick={(e) => handleZoom(null, e)} />
        </CommissionItem>
      </div>

      <div className="w-[75vw] px-6 pt-6 pb-14 mx-auto">
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

const CommissionItem = ({ id = "", className = "", t, children, inverse,
  i18nTitle = "", i18nSubtitle = "", i18nDetails = "",
  i18nLabel = "", i18nValue = "", i18nItems = [], 
  i18nExplanation = "", i18nCaption }) => {

  return (
    <div className={`${className} gap-2 items-center`}>

      { inverse && children }

      <div className="px-8 space-y-3 text-sm col-span-2">
        <div>
          <h3 className="text-font-bold font-medium text-2xl">{t(i18nTitle)}</h3>
          <h4 className="font-bold relative flex items-center -translate-y-1">
            <Sparkles className="w-4 h-4 z-10 fill-olive mr-1" stars={2} />
            <span>{t(i18nSubtitle)}</span>
          </h4>
        </div>

        <h5 className="-mt-1">{t(i18nDetails)}</h5>

        {i18nItems && i18nItems.length > 0 && <>
          <div className="px-6 grid grid-cols-3 gap-0">
            <div className="font-bold col-span-2">
              {t(i18nLabel)}
            </div>
            <div className="font-bold">
              {t(i18nValue)}
            </div>

            { i18nItems.map((item, i) => 
              <Fragment key={`${id}_${i}`}>
                <div className="col-span-2">
                  {t(item.label)}
                </div>
                <div className="">
                  {t(item.value)}
                </div>
              </Fragment>
            )}
          </div>
        </>}

        <p className="whitespace-pre-line">{t(i18nExplanation)}</p>
        { i18nCaption && 
          <p className="whitespace-pre-line">
            <Trans i18nKey={i18nCaption} t={t}>
              <span className="font-bold"></span>
            </Trans>
          </p>
        }
      </div>

      { !inverse && children }

    </div>
  );
};

export default RegularCommissions;
