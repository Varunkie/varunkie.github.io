import ns from '../../resources/constants/routes/locales.routes';

import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { FaItchIo } from "react-icons/fa";

import { useTranslation, Trans } from "react-i18next";
import React from "react";

import Title from "../../components/layouts/PageTitle";

const About = () => {
  const { t } = useTranslation(ns.about);

  return (<>
    <div className="tm-ct-300 p-6 flex flex-col md:flex-row rounded-3xl md:space-x-2 lg:space-x-6">
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
          <a href="https://twitter.com/varunkie" target="_blank" rel="noopener noreferrer">
            <CiTwitter className="w-16 h-16 p-4 tm-border-300 object-cover cursor-pointer rounded-full border-2" />
          </a>
          <a href="https://www.linkedin.com/in/eduardo-a-borges/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin className="w-16 h-16 p-4 tm-border-300 object-cover cursor-pointer rounded-full border-2" />
          </a>
          <a href="https://varunkie.itch.io" target="_blank" rel="noopener noreferrer">
            <FaItchIo className="w-16 h-16 p-4 tm-border-300 object-cover cursor-pointer rounded-full border-2" />
          </a>
        </div>
      </div>
    </div>
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
