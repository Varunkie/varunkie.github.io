import routes from "../../settings/routes/frontend.routes";
import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useTranslation, Trans } from "react-i18next";
import { useRef } from 'react';

import { EmailButton, SubmitButton } from "../../components/customs/CustomButton";
import { BlobHeader } from "../../components/customs/BlobBackground";
import { FloatImage } from "../../components/layouts/FloatContainer";
import WaveContainer from "../../components/layouts/WaveContainer";
import Sparkles from "../../components/effects/Sparkles";
import WaveText from "../../components/effects/WaveText";

const Contact = () => {
  const { t } = useTranslation([ns.contact, ns.common]);
  const containerRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = () => {
    console.log("Send!");
  };

  return (<>
    <BlobHeader className="w-full min-h-120" containerRef={containerRef} />

    <div className="pt-8 pb-14 relative flex flex-col items-center" ref={containerRef}>
      <Sparkles className="w-16 h-16 z-10 fill-font translate-y-3" stars={3} />
      <WaveText className="w-full h-18 font-extrabold fill-bold-pink  text-6xl" id="c1" 
        viewport="0.625 -58.86821746826172 225 81.77326965332031" hardcoded
        alignment="middle" anchor="middle" size="1" offset="0px"
        value={t("header.title")} />

      <EmailButton className="mt-6 mb-8" selectable
        label={t("common.email", { ns: ns.common })} />

      <div className="w-2/3 md:w-1/3 flex flex-col text-center text-sm space-y-4">
        <h2>{t("header.subtitle")}</h2>
        <h3>
          <Trans i18nKey="header.caption" t={t}>
            <span className="text-soft-pink "></span>
          </Trans> 
        </h3>
      </div>
    </div>

    <WaveContainer className="bg-transparent fill-div-bold overflow-hidden -mb-20" 
      content="bg-div-bold py-4 pb-20 relative" height="50" top>
        
      <form className="w-3/4 sm:w-1/2 py-8 space-y-4 z-10" 
        onSubmit={handleSubmit} ref={formRef} >
          
        <div className="flex w-3/4 sm:w-1/2 h-full absolute items-center pointer-events-none -z-10">
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

        <div className="grid sm:grid-cols-2 gap-4">
          <Input className="space-y-1"
            type="text" name="first_name" 
            label={t("form.name.label")} />

          <Input className="space-y-1"
            type="text" name="last_name" 
            label={t("form.last-name.label")} />
        </div>

        <Input className="space-y-1"
          type="email" name="user_email" 
          label={t("form.email.label")} />

        <Input className="space-y-1"
          type="text" name="email_subject" 
          label={t("form.subject.label")} />     

        <Input className="space-y-1"
          type="textarea" name="email_message" rows={4}
          label={t("form.message.label")} />    

        <SubmitButton 
          value={t("form.buttons.submit")} />
      </form>

    </WaveContainer>
  </>);
};

const Input = ({ className = "", type = "", name = "", label = "", placeholder = "", rows = 1 }) => {
  return (
    <label className={`${className} flex flex-col group`} htmlFor={name}>
      <span className="space-x-1 group-focus-within:text-bold-pink ">
        <span className="inline-flex items-baseline">
          <img className="w-4 h-4 translate-y-0.5 select-none"  
            src={images.sparkles.sparkle_cyan_small} alt="" /> 
        </span>
        <span>{label}</span>
      </span>
      { type === "textarea" && 
        <textarea className="px-1 field-sizing-fixed border-b-2 border-bold-pink  caret-bold-pink  focus:outline-none placeholder:italic"
          id={name} name={name} placeholder={placeholder} rows={rows} required />}
      { type !== "textarea" && 
        <input className="px-1 border-b-2 border-bold-pink  caret-bold-pink  focus:outline-none placeholder:italic"
          type={type} id={name} name={name} placeholder={placeholder} required />}
    </label>
  );
};

export default Contact;
