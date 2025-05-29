import ns from '../../settings/routes/locales.routes';

import { useTranslation } from "react-i18next";
import { Suspense, useLayoutEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import Modal from "../../components/layouts/ModalContainer";

import Context from '../../controllers/contexts/ThemeContext';
import Background from './Background';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, transitionStage, displayLocation, ...rest }) => {
  const { t, ready } = useTranslation(ns.common, { useSuspense: false });
  const location = useLocation();
 
  const [fill, setFill] = useState({ 
    main: displayLocation.pathname === "/",
    context: false,
    meta: {
      path: location.pathname,
      stage: transitionStage,
    }
  });
  
  useLayoutEffect(() => {
    setFill((state) => ({
      main: displayLocation.pathname !== "/",
      context: state.meta.path !== "/" && location.pathname !== "/",
      meta: {
        path: state.meta.stage === "fadeOut" && transitionStage === "fadeIn" ? displayLocation.pathname : state.meta.path,
        stage: transitionStage,
      }
    }));
  }, [transitionStage]);

  return (
    <Context className={`text-font outfit relative flex flex-col ${fill.context ? "bg-div" : ""} selection:bg-select selection:text-select-bold`}>
      <Header className="bg-div-bold px-8 py-2 h-14 font-bold" t={t} ready={ready} />

      <Modal className="overflow-visible" id="bg-home">
        <Background src="https://ik.imagekit.io/varunkie/sumii/Sumii_t89RnkVpk.png" 
          naturalWidth={4134} naturalHeight={3862} 
          parallaxSpeed={0.25} />
      </Modal>

      <Modal className="overflow-visible" id="bg-base">
        <div className={`${transitionStage} w-full h-full ${fill.main ? "bg-div" : ""}`} />
      </Modal>

      <Suspense fallback={<main className="min-h-screen grow" />}>
        <main className={`${transitionStage} grow flex flex-col relative`} {...rest}>
          {children}
        </main>
        <Footer className={`${transitionStage} w-full`} t={t} /> 
      </Suspense>
    </Context>
  );
};

export default Layout;
