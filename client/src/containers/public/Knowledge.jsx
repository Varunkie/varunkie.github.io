import ns from '../../resources/constants/routes/locales.routes';

import { FaUnity, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

import { useTranslation } from "react-i18next";
import React from "react";

import Group from "../../components/layouts/WindowGroup";
import Title from "../../components/layouts/PageTitle";
import Skill from "../../components/layouts/SkillProgress";

const Knowledge = () => {
  const { t } = useTranslation(ns.knowledge);

  return (<>
    <Group className="space-y-6">
      <Title className="font-bold text-3xl">{t("titles.knowledge")}</Title>

      <section className="grid md:grid-cols-2 gap-y-6 gap-x-12">
        <Trait render={FaUnity} title={t("subtitles.unity")} 
          subtitle={t("contents.unity")} />
        <Trait render={FaReact} title={t("subtitles.frontend")} 
          subtitle={t("contents.frontend")} />
        <Trait render={FaNodeJs}  title={t("subtitles.backend")} 
          subtitle={t("contents.backend")} />
        <Trait render={FaGitAlt} title={t("subtitles.methodologies")} 
          subtitle={t("contents.methodologies")} />
      </section> 
    </Group>

    <Group className="space-y-6">
      <section className="grid md:grid-cols-2 py-6 gap-y-14 gap-x-6">
        <div className="space-y-6">
          <Title className="font-bold text-3xl">{t("subtitles.skills")}</Title>
          <div className="px-6 text-xl space-y-4">
            <Skill className="w-full h-12" 
              title={t("contents.skills.csharp")} value={100} showvalue={true} />
            <Skill className="w-full h-12" 
              title={t("contents.skills.cplusplus")} value={20} showvalue={true} />
            <Skill className="w-full h-12" 
              title={t("contents.skills.javascript")} value={100} showvalue={true} />
            <Skill className="w-full h-12" 
              title={t("contents.skills.mongodb")} value={60} showvalue={true} />
          </div>
        </div>

        <div className="space-y-6">
          <Title className="font-bold text-3xl">{t("subtitles.languages")}</Title>
          <div className="px-6 text-xl space-y-4">
            <Skill className="w-full h-12" 
              title={t("contents.languages.spanish")} value={100} label={t("contents.levels.spanish")} />
            <Skill className="w-full h-12" 
              title={t("contents.languages.english")} value={65} label={t("contents.levels.english")} />
            <Skill className="w-full h-12" 
              title={t("contents.languages.japanese")} value={40} label={t("contents.levels.japanese")} />
          </div>
        </div>

        <div className="space-y-6">
          <Title className="font-bold text-3xl">{t("subtitles.frameworks")}</Title>
          <div className="px-6 text-xl space-y-4">
            <Skill className="w-full h-12" 
              title={t("contents.frameworks.unity2d")} value={100} showvalue={true} />
            <Skill className="w-full h-12" 
              title={t("contents.frameworks.reactjs")} value={80} showvalue={true} />
            <Skill className="w-full h-12" 
              title={t("contents.frameworks.expressjs")} value={60} showvalue={true} />
            <Skill className="w-full h-12" 
              title={t("contents.frameworks.tailwindcss")} value={70} showvalue={true} />
          </div>
        </div>

        <div className="space-y-6">
          <Title className="font-bold text-3xl">{t("subtitles.versions")}</Title>
          <div className="px-6 text-xl space-y-4">
            <Skill className="w-full h-12" 
              title={t("contents.versions.git")} value={70} showvalue={true} />
          </div>
        </div>
      </section>
    </Group>
  </>);
};

const Trait = ({ render: Icon, title = "", subtitle = "" }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center text-xl text-indigo-600 dark:text-orange-500">
        { Icon && <Icon className="w-8 h-8 mx-4" /> }
        <h2 className="px-4 py-1 font-bold">{title}</h2>
      </div>
      <p className="text-justify">{subtitle}</p>
    </div>
  );
};

export default Knowledge;
