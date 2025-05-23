import routes from "./settings/routes/frontend.routes";

import { Routes, Route } from "react-router-dom";
import { lazy, useLayoutEffect } from "react";

import { useBrowserAnimation } from "./utils/hooks/useAnimation";

// LAYOUT
import Layout from "./containers/layouts/Layout";
import NotFound from "./containers/layouts/NotFound";

// PUBLIC
const Home = lazy(() => import("./containers/public/Home"));
const AboutMe = lazy(() => import("./containers/public/AboutMe"));
const Commissions = lazy(() => import("./containers/public/Commissions"));
const Regular = lazy(() => import("./containers/subpages/RegularCommissions"));
const Vtuber = lazy(() => import("./containers/subpages/VtuberCommissions"));
const Gallery = lazy(() => import("./containers/public/Gallery"));
const Contact = lazy(() => import("./containers/public/Contact"));

// COMPONENTS
const App = () => {
  const { displayLocation, transitionStage, onAnimationEnded } = useBrowserAnimation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [displayLocation]);

  return (
    <Layout transitionStage={transitionStage} displayLocation={displayLocation} onAnimationEnd={onAnimationEnded}>
      <Routes location={displayLocation}>
        <Route element={<Home />} path={routes.home} />
        <Route element={<AboutMe />} path={routes.about} />
        <Route path={routes.commissions}>
          <Route element={<Commissions />} path={""} />
          <Route element={<Regular />} path={routes.regular} />
          <Route element={<Vtuber />} path={routes.vtuber} />
        </Route>
        <Route element={<Gallery />} path={routes.gallery} />
        <Route element={<Contact />} path={routes.contact} />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Layout>
  );
};

// EXPORTS
export default App;
