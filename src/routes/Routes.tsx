import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { DashboardLayout, LogoOnlyLayout } from '../layouts';
import { Wallet, NotFound } from '../pages';

const Routes: React.FC = () => {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/wallet" replace /> },
        { path: '/wallet', element: <Wallet /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
};

export default Routes;
