import routes from "../../resources/constants/routes/frontend.routes";
import ns from '../../resources/constants/routes/locales.routes';

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import React, { useCallback } from "react";

import Group from "../../components/layouts/WindowGroup";
import Title from "../../components/layouts/PageTitle";

const Portfolio = () => {
  const { t } = useTranslation(ns.portfolio);
  const navigate = useNavigate();

  const handleClick = useCallback((value) => {
    navigate(`/${routes.portfolio}/${value}`);
  }, [navigate]);

  return (<>
    <Group className="space-y-6 flex flex-col items-center lg:items-start">
      <Title className="font-bold text-3xl">{t("titles.portfolio")}</Title>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Cover className="w-full aspect-video" 
          src="https://ik.imagekit.io/varunkie/Cover_PcuCGpJBe.png"
          title={t("titles.itchio")} subtitle={t("subtitles.itchio")} 
          value={routes.itchio} onClick={handleClick} />
        <Cover className="w-full aspect-video" 
          src="https://ik.imagekit.io/varunkie/enviroment-tool_FSIEGPOwY.png"
          title={t("titles.unitytools")} subtitle={t("subtitles.unitytools")} 
          value={routes.unitytools} onClick={handleClick} />
        <Cover className="w-full aspect-video" 
          src="https://ik.imagekit.io/varunkie/acolyte-logo__0vYoDJBN.png"
          title={t("titles.acolyte")} subtitle={t("subtitles.acolyte")} 
          value={routes.acolyte} onClick={handleClick} />
        <Cover className="w-full aspect-video" 
          src="https://ik.imagekit.io/varunkie/spectrum-logo_K8BkRrrji.jpg"
          title={t("titles.spectrum")} subtitle={t("subtitles.spectrum")} 
          value={routes.spectrum} onClick={handleClick} />
        <Cover className="w-full aspect-video" 
          src="https://ik.imagekit.io/varunkie/gamejam-logo_VhAK7v_Pw.png"
          title={t("titles.gamejam")} subtitle={t("subtitles.gamejam")} 
          value={routes.gamejam} onClick={handleClick} />
      </div>
    </Group>
  </>);
};

const Cover = ({ className = "", src = "", title = "", subtitle = "", value, onClick }) => {
  return (
    <div className={`${className} flex relative`}>
      <img className="absolute inset-0 w-full h-full object-cover object-center" 
        alt={title} src={src}/>
        
      <div className="px-4 md:px-6 flex flex-col justify-center relative z-10 w-full bg-white opacity-0 hover:opacity-80 cursor-pointer"
        onClick={() => onClick && onClick(value)}>
        <h2 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h2>
        <p className="text-black leading-relaxed text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default Portfolio;
