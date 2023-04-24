import ns from '../../resources/constants/routes/locales.routes';

import { useTranslation } from "react-i18next";
import React from "react";

const About = () => {
  const { t } = useTranslation(ns.common);

  return (<>
    <h1>{t("pages.titles.about")}</h1>
  </>);
};

export default About;
