import ns from '../../resources/constants/routes/locales.routes';

import { useTranslation } from "react-i18next";
import React from "react";

const Experience = () => {
  const { t } = useTranslation(ns.common);

  return (<>
    <h1>{t("pages.titles.experience")}</h1>
  </>);
};

export default Experience;
