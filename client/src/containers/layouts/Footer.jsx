import ns from '../../resources/constants/routes/locales.routes';

import { useTranslation } from "react-i18next";
import React from "react";

const Footer = ({ className = "" }) => {
  const { t, ready } = useTranslation(ns.common, { useSuspense: false });

  return (
    <footer className={`${className} flex justify-end`}>
      { ready && <>
        <div>{t("footer.contents.updated")}</div>
      </>}
    </footer>
  );
};

export default Footer;
