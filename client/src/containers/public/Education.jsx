import ns from '../../resources/constants/routes/locales.routes';

import { useTranslation } from "react-i18next";
import React from "react";

const Education = () => {
  const { t } = useTranslation(ns.common);

  return (<>
    <h1>{t("pages.titles.education")}</h1>
  </>);
};

export default Education;
