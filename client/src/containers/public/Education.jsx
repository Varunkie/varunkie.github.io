import ns from '../../resources/constants/routes/locales.routes';

import { useTranslation } from "react-i18next";
import React from "react";

import Title from "../../components/layouts/PageTitle";
import Item from "../../components/layouts/WorkContent";

const Education = () => {
  const { t } = useTranslation(ns.education);

  return (<>
    <div className="tm-ct-300 p-6 md:p-10 rounded-3xl space-y-6">
      <Title className="font-bold text-3xl">{t("titles.education")}</Title>
    </div>

    <div className="flex flex-col lg:flex-row lg:space-x-6 lg:space-x-12">
      <div className="tm-ct-300 p-6 md:p-10 grow rounded-3xl md:space-y-4 lg:space-y-8">
        <Item className="h-full" date={t("contents.dates.university")} title={t("contents.items.university")}>
          <li>{t("contents.subitems.university.one")}</li>
          <li>{t("contents.subitems.university.two")}</li>
          <li>{t("contents.subitems.university.three")}</li>
          <li>{t("contents.subitems.university.four")}</li>
        </Item>
      </div>

      <div className="lg:w-1/3 tm-ct-300 p-6 md:p-10 mb-6 lg:mb-0 rounded-3xl space-y-6 flex flex-col justify-center items-center order-first lg:order-last">
        <img className="object-cover" style={{ width: "100%", maxWidth: "200px" }}
          src="https://ik.imagekit.io/varunkie/logo-urbe_JAwwRqdZC.gif" alt="urbe" />
      </div>
    </div>
  </>);
};

export default Education;
