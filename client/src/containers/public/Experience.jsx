import ns from '../../resources/constants/routes/locales.routes';

import { useTranslation } from "react-i18next";
import React from "react";

import Group from "../../components/layouts/WindowGroup";
import Title from "../../components/layouts/PageTitle";
import Work from "../../components/layouts/WorkContent";

const Experience = () => {
  const { t } = useTranslation(ns.experience);

  return (<>
    <Group className="space-y-6 flex justify-center lg:justify-start">
      <Title className="font-bold text-3xl">{t("titles.experience")}</Title>
    </Group>

    <div className="flex flex-col lg:flex-row lg:space-x-6 lg:space-x-12">
      <Group className="lg:w-8/12 grow md:space-y-4 lg:space-y-8">
        <Work date={t("contents.dates.fourth")} title={t("contents.items.fourth")}>
          <li>{t("contents.subitems.fourth.one")}</li>
          <li>{t("contents.subitems.fourth.two")}</li>
          <li>{t("contents.subitems.fourth.three")}</li>
          <li>{t("contents.subitems.fourth.four")}</li>
        </Work>
        <Work date={t("contents.dates.third")} title={t("contents.items.third")}>
          <li>{t("contents.subitems.third.one")}</li>
          <li>{t("contents.subitems.third.two")}</li>
        </Work>
      </Group>

      <Group className="lg:w-3/12 mb-6 lg:mb-0 space-y-6 flex flex-col justify-center items-center order-first lg:order-last">
        <img className="object-cover" style={{ width: "100%", maxWidth: "200px" }}
          src="https://ik.imagekit.io/varunkie/logo-coachteen_MkeEJgUDZ.png" alt="coachteen" />
      </Group>
    </div>

    <div className="flex flex-col lg:flex-row lg:space-x-6 lg:space-x-12">
      <Group className="lg:w-8/12 grow md:space-y-4 lg:space-y-8">
        <Work date={t("contents.dates.second")} title={t("contents.items.second")}>
          <li>{t("contents.subitems.second.one")}</li>
          <li>{t("contents.subitems.second.two")}</li>
          <li>{t("contents.subitems.second.three")}</li>
          <li>{t("contents.subitems.second.four")}</li>
        </Work>
        <Work date={t("contents.dates.first")} title={t("contents.items.first")}>
          <li>{t("contents.subitems.first.one")}</li>
          <li>{t("contents.subitems.first.two")}</li>
          <li>{t("contents.subitems.first.three")}</li>
          <li>{t("contents.subitems.first.four")}</li>
        </Work>
      </Group>

      <Group className="lg:w-3/12 mb-6 lg:mb-0 space-y-6 flex flex-col justify-center items-center order-first lg:order-last">
        <img className="object-cover" style={{ width: "100%", maxWidth: "300px" }}
          src="https://ik.imagekit.io/varunkie/logo-3davenue_expTeJldD.png" alt="3davenue" />
      </Group>
    </div>

    <Group className="space-y-6 flex justify-center lg:justify-start">
      <Title className="font-bold text-3xl">{t("titles.education")}</Title>
    </Group>

    <div className="flex flex-col lg:flex-row lg:space-x-6 lg:space-x-12">
      <Group className="lg:w-8/12 grow space-y-4">
        <div className="flex flex-col space-y-1">
          <h2 className="font-bold text-2xl text-center md:text-left">{t("contents.items.university")}</h2>
          <h3 className="text-gray-400 dark:text-gray-300 text-center md:text-left">{t("contents.dates.university")}</h3>
        </div>
        <p className="whitespace-pre-line">{t("contents.subitems.university")}</p>
      </Group>

      <Group className="lg:w-3/12 mb-6 lg:mb-0 space-y-6 flex flex-col justify-center items-center order-first lg:order-last">
        <img className="object-cover" style={{ width: "100%", maxWidth: "120px" }}
          src="https://ik.imagekit.io/varunkie/logo-urbe_JAwwRqdZC.gif" alt="urbe" />
      </Group>
    </div>
  </>);
};

export default Experience;
