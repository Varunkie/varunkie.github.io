import { useLocation } from "react-router-dom";
import React, { useLayoutEffect, Suspense } from 'react';

import Context from '../../controllers/contexts/ThemeContext';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Context className="hide-scroll">
      <Header className="tm-ct-200 px-8 py-2 h-14" dropdown="tm-ct-200 px-6 py-2 space-y-2 -right-8 translate-y-2"/>
      <main className="tm-ct-100 px-8 py-2 grow hide-scroll">
        <Suspense fallback="">
          {children}
        </Suspense>
      </main>
      <Footer className="tm-ct-200 px-8 py-2" /> 
    </Context>
  );
}

export default Layout;
