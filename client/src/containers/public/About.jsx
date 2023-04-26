import ns from '../../resources/constants/routes/locales.routes';

import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { FaItchIo } from "react-icons/fa";

import { useTranslation, Trans } from "react-i18next";
import React from "react";

import Title from "../../components/layouts/PageTitle";
import Group from "../../components/layouts/WindowGroup";
import Icon from "../../components/layouts/ExternalLink";

const About = () => {
  const { t } = useTranslation(ns.about);

  return (<>
    <Group className="flex flex-col md:flex-row rounded-3xl md:space-x-2 lg:space-x-6">
      <div className="flex justify-center">
        <img className="object-cover rounded-3xl"
          style={{ width: "100%", minWidth: "300px", maxWidth: "800px" }} 
          src="https://ik.imagekit.io/varunkie/20200117_114600__flSr6VOt.jpg" alt="avatar" />
      </div>

      <div className="flex flex-col space-y-6 py-6 px-4 lg:px-6 justify-center">
        <Title className="font-bold text-3xl">{t("titles.about")}</Title>
        <p>{t("contents.about")}</p>
        <ul className="grid lg:grid-cols-2 gap-2 border-2 border-dashed tm-border-300 rounded-xl p-6">
          <Item i18nKey="contents.name" value="Eduardo Borges" t={t} />
          <Item i18nKey="contents.address" value="Venezuela" t={t} />
          <Item i18nKey="contents.experience" value="4" t={t} />
          <Item i18nKey="contents.email" value="edbg97@gmail.com" t={t} />
        </ul>

        <div className="flex justify-center space-x-8 pt-4">
          <Icon href="https://twitter.com/varunkie">
            <CiTwitter className="w-full h-full" />
          </Icon>
          <Icon href="https://www.linkedin.com/in/eduardo-a-borges/">
            <CiLinkedin className="w-full h-full" />
          </Icon>
          <Icon href="https://varunkie.itch.io">
            <FaItchIo className="w-full h-full" />
          </Icon>
        </div>
      </div>
    </Group>
  </>);
};

const Item = ({ i18nKey, t, value }) => {
  return (
    <li><Trans i18nKey={i18nKey} t={t} values={{value}}>
      <bold className="font-bold">key</bold>: value
    </Trans></li>
  );
};

export default About;
