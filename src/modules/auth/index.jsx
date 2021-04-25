import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { TraverseRoutes } from '../../commons/components/traverse-routes';
import { AuthWrapper } from './components/wrappers';
import joinUrl from '../../commons/components/join-url';

const buildUrl = (endPoint) => joinUrl('/auth', endPoint);

const routes = [
  {
    path: buildUrl('/'),
    exact: true,
    component: () => <Redirect to={buildUrl('/login')} />,
  },

  {
    path: buildUrl('/login'),
    component: lazy(() => import('./pages/login')),
  },

  {
    path: buildUrl('/register'),
    component: lazy(() => import('./pages/register')),
  },

  {
    path: buildUrl('/forgot'),
    component: lazy(() => import('./pages/forgot')),
  },

  {
    path: buildUrl('/verify'),
    component: lazy(() => import('./pages/verify')),
  },
];

const AuthModule = () => {
  return (
    <AuthWrapper>
      <TraverseRoutes routes={routes} />
    </AuthWrapper>
  );
};
export default AuthModule;
