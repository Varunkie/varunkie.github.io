import routes from "../../resources/constants/routes/frontend.routes";
import ns from '../../resources/constants/routes/locales.routes';
import images from "../../resources/images";

import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React from "react";

import DarkMode from "../../components/context/DarkModeToggle";
import Language from "../../components/context/LanguageSelect";
import Dropdown from "../../components/common/DropdownMenu";

const Header = ({ className = "", dropdown = "" }) => {
  const { t, ready } = useTranslation(ns.common, { useSuspense: false });
  const { pathname } = useLocation(); 

  return (
    <nav className={`${className} sticky top-0 flex`}>
      <div className="flex">
        <Link to={routes.about}>
          VARUNKIE
        </Link>
      </div>

      <div className="flex w-full justify-end">
        <div className="hidden lg:flex w-full">
          <div className="flex space-x-6 grow justify-center mx-8 items-center">
            { ready && <>
              <Element path={pathname} to={routes.about}>{t("pages.titles.about")}</Element>
              <Element path={pathname} to={routes.knowledge}>{t("pages.titles.knowledge")}</Element>
              <Element path={pathname} to={routes.experience}>{t("pages.titles.experience")}</Element>
              <Element path={pathname} to={routes.education}>{t("pages.titles.education")}</Element>
              <Element path={pathname} to={routes.portfolio}>{t("pages.titles.portfolio")}</Element>
            </>}
          </div>

          <div className="flex justify-center items-center space-x-4">
            { ready && <Language className="bg-transparent px-1 py-0.5 border-0 ring-0" /> }
            { ready && <DarkMode className="bg-white dark:bg-purple-400 w-14 h-7" /> }
          </div>
        </div>

        <div className="lg:hidden">
          <Dropdown className="flex items-center"
            render={({ onClose }) => !ready ? null :
            <div className={`${dropdown} absolute flex flex-col items-center whitespace-nowrap`}>
              <Link to={routes.about} onClick={onClose}>{t("pages.titles.about")}</Link>
              <div className="tm-hr-200" />
              <Link to={routes.knowledge} onClick={onClose}>{t("pages.titles.knowledge")}</Link>
              <Link to={routes.experience} onClick={onClose}>{t("pages.titles.experience")}</Link>
              <Link to={routes.education} onClick={onClose}>{t("pages.titles.education")}</Link>
              <div className="tm-hr-200" />
              <Link to={routes.portfolio} onClick={onClose}>{t("pages.titles.portfolio")}</Link>
            </div>}>
              
            <img className="object-cover cursor-pointer"
              style={{ width: "100%", maxWidth: "35px" }} 
              src={images.icons.menu} alt="menu" />
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

const Element = ({ className = "", hidden, path, to, children, multi, onClick }) => {
  return (hidden ? null :
    <div className={className}>
      <Link to={to} onClick={onClick}>{children}</Link>
      <div className={`tm-hr-200 ${(multi && multi.includes(path)) || path === to ? "" : "invisible"}`} />
    </div>
  );
};

export default Header;
