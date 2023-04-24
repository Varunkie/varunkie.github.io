import ns from '../../resources/constants/routes/locales.routes';

import { useTranslation } from "react-i18next";
import React from "react";

const Knowledge = () => {
  const { t } = useTranslation(ns.common);

  return (<>
    <h1>{t("pages.titles.knowledge")}</h1>

    <section className="grid grid-cols-3">
      <Trait />
      <Trait />
      <Trait />
      <Trait />
      <Trait />
      <Trait />
    </section> 

    <section className="grid grid-cols-2">
      <Skill />
      <Skill />
      <Skill />
      <Skill />
      <Skill />
    </section>
  </>);
};

const Trait = () => {
  return (
    <div>
      <h2>Titulo</h2>
      <p>Texto</p>
    </div>
  );
};

const Skill = () => {
  return (
    <div>
      <h3>Elemento</h3>
      <h4>Barra</h4>
    </div>
  );
};

export default Knowledge;
