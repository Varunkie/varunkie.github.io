import ns from '../../resources/constants/routes/locales.routes';

import { useTranslation } from "react-i18next";
import React from "react";

import Title from "../../components/layouts/PageTitle";
import Item from "../../components/layouts/WorkContent";

const Experience = () => {
  const { t } = useTranslation(ns.experience);

  return (<>
    <div className="tm-ct-300 p-6 md:p-10 rounded-3xl space-y-6">
      <Title className="font-bold text-3xl">{t("titles.experience")}</Title>
    </div>

    <div className="flex flex-col lg:flex-row lg:space-x-6 lg:space-x-12">
      <div className="tm-ct-300 p-6 md:p-10 grow rounded-3xl md:space-y-4 lg:space-y-8">
        <Item date={t("contents.dates.fourth")} title={t("contents.items.fourth")}>
          <li>{t("contents.subitems.fourth.one")}</li>
          <li>{t("contents.subitems.fourth.two")}</li>
          <li>{t("contents.subitems.fourth.three")}</li>
          <li>{t("contents.subitems.fourth.four")}</li>
        </Item>
        <Item date={t("contents.dates.third")} title={t("contents.items.third")}>
          <li>{t("contents.subitems.third.one")}</li>
          <li>{t("contents.subitems.third.two")}</li>
        </Item>
      </div>

      <div className="lg:w-1/3 tm-ct-300 p-6 md:p-10 mb-6 lg:mb-0 rounded-3xl space-y-6 flex flex-col justify-center items-center order-first lg:order-last">
        <img className="object-cover" style={{ width: "100%", maxWidth: "200px" }}
          src="https://ik.imagekit.io/varunkie/logo-coachteen_MkeEJgUDZ.png" alt="coachteen" />
      </div>
    </div>

    <div className="flex flex-col lg:flex-row lg:space-x-6 lg:space-x-12">
      <div className="tm-ct-300 p-6 md:p-10 grow rounded-3xl md:space-y-4 lg:space-y-8">
        <Item date={t("contents.dates.second")} title={t("contents.items.second")}>
          <li>{t("contents.subitems.second.one")}</li>
          <li>{t("contents.subitems.second.two")}</li>
          <li>{t("contents.subitems.second.three")}</li>
          <li>{t("contents.subitems.second.four")}</li>
        </Item>
        <Item date={t("contents.dates.first")} title={t("contents.items.first")}>
          <li>{t("contents.subitems.first.one")}</li>
          <li>{t("contents.subitems.first.two")}</li>
          <li>{t("contents.subitems.first.three")}</li>
          <li>{t("contents.subitems.first.four")}</li>
        </Item>
      </div>

      <div className="lg:w-1/3 tm-ct-300 p-6 md:p-10 mb-6 lg:mb-0 rounded-3xl space-y-6 flex flex-col justify-center items-center order-first lg:order-last">
        <img className="object-cover" style={{ width: "100%", maxWidth: "300px" }}
          src="https://ik.imagekit.io/varunkie/logo-3davenue_expTeJldD.png" alt="3davenue" />
      </div>
    </div>
  </>);
};

export default Experience;
