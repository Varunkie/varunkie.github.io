import routes from "./resources/constants/routes/frontend.routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy } from "react";

// LAYOUT
import Layout from "./containers/layouts/Layout";
import NotFound from "./containers/layouts/NotFound";

// PUBLIC
const About = lazy(() => import("./containers/public/About"));
const Knowledge = lazy(() => import("./containers/public/Knowledge"));
const Experience = lazy(() => import("./containers/public/Experience"));
const Education = lazy(() => import("./containers/public/Education"));
const Portfolio = lazy(() => import("./containers/public/Portfolio"));

// COMPONENTS
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<About />} path={routes.about} />
          <Route element={<Knowledge />} path={routes.knowledge} />
          <Route element={<Experience />} path={routes.experience} />
          <Route element={<Education />} path={routes.education} />
          <Route element={<Portfolio />} path={routes.portfolio} />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

// EXPORTS
export default App;
