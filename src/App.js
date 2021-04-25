import { BrowserRouter, Redirect } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import styled from "styled-components";
import { LoadingIndicator } from "./commons/components/loading-indicator";
import { TraverseRoutes } from "./commons/components/traverse-routes";
import { theme } from "./commons/theme";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/auth" />,
  },

  {
    path: "/auth",
    component: lazy(() => import("./modules/auth")),
  },

  {
    path: "/patientDashboard",
    component: lazy(() => import("./modules/patientDashboard")),
  },
];

const RootComp = styled.div`
  display: grid;
  height: 100vh;
  .navbar {
    position: absolute;
    width: 100vw;
  }
`;

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Suspense fallback={<LoadingIndicator when />}>
        <RootComp>
          <BrowserRouter>
            <TraverseRoutes routes={routes} />
          </BrowserRouter>
        </RootComp>
      </Suspense>
    </MuiThemeProvider>
  );
}
