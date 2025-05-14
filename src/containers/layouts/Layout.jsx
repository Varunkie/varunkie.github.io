import ns from '../../settings/routes/locales.routes';

import { useTranslation } from "react-i18next";
import { Suspense } from 'react';

import Modal from "../../components/layouts/ModalContainer";

import Context from '../../controllers/contexts/ThemeContext';
import Background from './Background';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, transitionStage, ...rest }) => {
  const { t, ready } = useTranslation(ns.common, { useSuspense: false });
  return (
    <Context className="text-font font-base relative flex flex-col">
      <Header className="bg-div-bold px-8 py-2 h-14 font-bold" 
        t={t} ready={ready} />

      <Modal className="overflow-visible">
        <Background src="https://ik.imagekit.io/varunkie/sumii/Sumii_t89RnkVpk.png?updatedAt=1747092582889" 
          naturalWidth={4134} naturalHeight={3862} 
          parallaxSpeed={0.25} />
      </Modal>

      <main className={`${transitionStage} grow flex flex-col relative`} {...rest}>
        <Suspense fallback="">
          {children}
        </Suspense>
      </main>

      <Footer className={`${transitionStage} w-full bg-div`}
        t={t} ready={ready} /> 
    </Context>
  );
};

export default Layout;
