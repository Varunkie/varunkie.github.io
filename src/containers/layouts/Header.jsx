import routes from "../../settings/routes/frontend.routes";
import images from "../../resources/images";

import { useLocation, Link } from "react-router-dom";

//import DarkMode from "../../components/context/DarkModeToggle";
//import Language from "../../components/context/LanguageSelect";
import Dropdown from "../../components/common/DropdownMenu";

const Header = ({ className = "", t, ready }) => {
  const { pathname } = useLocation(); 

  return (
    <nav className={`${className} sticky top-0 flex z-20 justify-end lg:justify-center`}>
      <div className="hidden md:flex w-full">
        <div className="mx-auto space-x-16 flex justify-center items-center">
          { ready && <>
            <Element path={pathname} to={routes.home}>{t("pages.titles.home")}</Element>
            <Element path={pathname} to={routes.about}>{t("pages.titles.about")}</Element>
            <Element path={pathname} to={routes.gallery}>{t("pages.titles.gallery")}</Element>
            <Element path={pathname} to={routes.commissions} multi>{t("pages.titles.commissions")}</Element>
            <Element path={pathname} to={routes.contact}>{t("pages.titles.contact")}</Element>
          </>}
        </div>
      </div>

      <div className="md:hidden">
        <Dropdown className="flex items-center"
          render={({ onClose }) => !ready ? null :
          <div className="bg-div-bold px-6 py-4 space-y-4 -right-8 translate-y-2 absolute flex flex-col items-center whitespace-nowrap">
            <div className="w-full h-1 bg-nav-item" />
            <Element path={pathname} to={routes.home} onClick={onClose} inline>{t("pages.titles.home")}</Element>
            <Element path={pathname} to={routes.about} onClick={onClose} inline>{t("pages.titles.about")}</Element>
            <Element path={pathname} to={routes.gallery} onClick={onClose} inline>{t("pages.titles.gallery")}</Element>
            <Element path={pathname} to={routes.commissions} onClick={onClose} inline multi>{t("pages.titles.commissions")}</Element>
            <Element path={pathname} to={routes.contact} onClick={onClose} inline>{t("pages.titles.contact")}</Element>
            <div className="w-full h-1 bg-nav-item" />
          </div>}>
            
          <img className="object-cover cursor-pointer select-none"
            style={{ width: "100%", maxWidth: "35px" }} 
            src={images.icons.menu} alt="menu" />
        </Dropdown>
      </div>
    </nav>
  );
};

const Element = ({ className = "", hidden, path, to, children, multi, inline, onClick }) => {
  var show = !hidden && ((multi && path.includes(to)) || path === `/${to}`);
  return (hidden ? null :
    inline 
      ?
        <Link className={`${className} ${show ? "text-nav-item" : ""}`} to={to} onClick={onClick}>{children}</Link>
      :
        <div className={`${className} relative`}>
          <Link className={`${show ? "text-nav-item" : ""}`} to={to} onClick={onClick}>{children}</Link>
          <div className={`${show ? "absolute w-4/6 h-1 mt-0.5 bg-nav-item left-1/2 -translate-x-1/2" : "invisible"}`} />
        </div>
  );
};

export default Header;
