import { languages } from '../../settings/plugins/i18next';
import { withTranslation } from "react-i18next";
import React from "react";

const Menu = ({ className = "", i18n }) => {
  const setLanguage = value => i18n.changeLanguage(value);
  const handleChange = e => setLanguage(e.target.value);
  const language = i18n.resolvedLanguage;

  return (
    <select className={`${className} uppercase`} 
      value={language} onChange={handleChange}>
      { languages.availables.map(item => (
        <option className="text-black" key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default withTranslation()(Menu);
