import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import { TraverseRoutes } from "../../commons/components/traverse-routes";
import { AuthWrapper } from "../components/wrappers";
import joinUrl from "../../commons/components/join-url";

const buildUrl = (endPoint) => joinUrl("/hrt", endPoint);

const routes = [
  {
    path: buildUrl("/"),
    exact: true,
    component: () => <Redirect to={buildUrl("/dashboard")} />,
  },

  {
    path: buildUrl("/dashboard"),
    component: lazy(() => import("./pages/dashboard")),
  },

  {
    path: buildUrl("/profile"),
    component: lazy(() => import("./pages/profile")),
  },
];

const HtrModule = () => {
  return (
    <AuthWrapper>
      <TraverseRoutes routes={routes} />
    </AuthWrapper>
  );
};
export default HtrModule;
