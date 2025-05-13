import { Suspense } from 'react';

import Modal from "../../components/layouts/ModalContainer";

import Context from '../../controllers/contexts/ThemeContext';
import Background from './Background';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, transitionStage, ...rest }) => {
  return (
    <Context className="text-font font-base relative flex flex-col">
      <Header className="bg-div-bold px-8 py-2 h-14 font-bold" 
        content="mx-auto space-x-16" 
        dropdown="bg-container-bold px-6 py-4 space-y-4 -right-8 translate-y-2" />

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

      <Suspense fallback="">
        <Footer className={`${transitionStage} w-full bg-div`}
          content="fill-icon w-5/6 md:w-2/3 lg:w-1/2 px-12 py-16 lg:px-16 space-y-40 mx-auto" 
          icons="w-8 h-8" /> 
      </Suspense>
    </Context>
  );
};

export default Layout;
