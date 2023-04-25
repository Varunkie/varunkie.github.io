import routes from "./resources/constants/routes/frontend.routes";

import { Routes, Route } from "react-router-dom";
import React, { lazy } from "react";

import { useBrowserAnimation } from "./utils/hooks/useAnimation";

// LAYOUT
import Layout from "./containers/layouts/Layout";
import NotFound from "./containers/layouts/NotFound";

// PUBLIC
const About = lazy(() => import("./containers/public/About"));
const Knowledge = lazy(() => import("./containers/public/Knowledge"));
const Experience = lazy(() => import("./containers/public/Experience"));
const Portfolio = lazy(() => import("./containers/public/Portfolio"));

// COMPONENTS
const App = () => {
  const { displayLocation, transitionStage, onAnimationEnded } = useBrowserAnimation();

  return (
    <Layout transitionStage={transitionStage} onAnimationEnd={onAnimationEnded}>
      <Routes location={displayLocation}>
        <Route element={<About />} path={routes.about} />
        <Route element={<Knowledge />} path={routes.knowledge} />
        <Route element={<Experience />} path={routes.experience} />
        <Route element={<Portfolio />} path={routes.portfolio} />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Layout>
  );
};

// EXPORTS
export default App;
