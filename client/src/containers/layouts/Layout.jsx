import { useLocation } from "react-router-dom";
import React, { useLayoutEffect, Suspense } from 'react';

import Context from '../../controllers/contexts/ThemeContext';
import Header from './Header';
import Footer from './Footer';

import "../../resources/themes/styles/Layout.css";

const Layout = ({ children, transitionStage, ...rest }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Context className="tm-ct-100">
      <Header className="tm-ct-200 px-8 py-2 h-14" dropdown="tm-ct-200 px-6 py-4 space-y-4 -right-8 translate-y-2"/>
      <main className={`${transitionStage} p-6 lg:p-16 grow flex flex-col space-y-6 lg:space-y-12`} {...rest}>
        <Suspense fallback="">
          {children}
        </Suspense>
      </main>
      <Footer className="tm-ct-200 h-10 px-8 py-2" /> 
    </Context>
  );
}

export default Layout;
