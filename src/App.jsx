import routes from "./settings/routes/frontend.routes";

import { Routes, Route } from "react-router-dom";
import { lazy, useLayoutEffect } from "react";

import { useBrowserAnimation } from "./utils/hooks/useAnimation";

// LAYOUT
import Layout from "./containers/layouts/Layout";
import NotFound from "./containers/layouts/NotFound";

// PUBLIC
const Home = lazy(() => import("./containers/public/Home"));
const Form = lazy(() => import("./containers/public/Form"));

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
        <Route element={<Form />} path={routes.form} />
        <Route element={<Home />} path="*" />
      </Routes>
    </Layout>
  );
};

// EXPORTS
export default App;
