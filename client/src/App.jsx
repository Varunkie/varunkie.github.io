import routes from "./resources/constants/routes/frontend.routes";

import { Routes, Route } from "react-router-dom";
import React, { lazy, useLayoutEffect } from "react";

import { useBrowserAnimation } from "./utils/hooks/useAnimation";

// LAYOUT
import Layout from "./containers/layouts/Layout";
import NotFound from "./containers/layouts/NotFound";

// PUBLIC
const About = lazy(() => import("./containers/public/About"));
const Knowledge = lazy(() => import("./containers/public/Knowledge"));
const Experience = lazy(() => import("./containers/public/Experience"));
const Portfolio = lazy(() => import("./containers/public/Portfolio"));
const Archive = lazy(() => import("./containers/public/Archive"));

// COMPONENTS
const App = () => {
  const { displayLocation, transitionStage, onAnimationEnded } = useBrowserAnimation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [displayLocation]);

  return (
    <Layout transitionStage={transitionStage} onAnimationEnd={onAnimationEnded}>
      <Routes location={displayLocation}>
        <Route element={<About />} path={routes.about} />
        <Route element={<Knowledge />} path={routes.knowledge} />
        <Route element={<Experience />} path={routes.experience} />
        <Route path={routes.portfolio}>
          <Route element={<Portfolio/>} path={""} />
          <Route element={<Archive index={routes.gamejam} />} path={routes.gamejam} />
          <Route element={<Archive index={routes.spectrum} />} path={routes.spectrum} />
          <Route element={<Archive index={routes.acolyte} />} path={routes.acolyte} />
          <Route element={<Archive index={routes.unitytools} />} path={routes.unitytools} />
          <Route element={<Archive index={routes.itchio} />} path={routes.itchio} />
        </Route>
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Layout>
  );
};

// EXPORTS
export default App;
