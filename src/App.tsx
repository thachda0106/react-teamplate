import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import { PUBLIC_ROUTES } from "./routes";

const App: React.FC = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map(({ path, component, layout, children = [] }, index) => {
        const Component = component || Fragment;
        const Layout = layout || Fragment;

        return (
          <Route
            key={index}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          >
            {children.map(({ path, component: Component = Fragment }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
        );
      })}
    </Routes>
  );
};

export default App;
