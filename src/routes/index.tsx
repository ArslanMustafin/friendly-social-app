import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { SignInPage } from 'pages/sign-in';
import { SignUpPage } from 'pages/sign-up';

import { ErrorBoundary } from 'components/error-boundary';
import { AppLayout, AuthLayout } from 'components/layouts';

import { routes } from './constants';
import { ProtectGuard } from './guards';

export const routerConfig: RouteObject[] = [
  {
    element: (
      <ProtectGuard>
        <AppLayout />
      </ProtectGuard>
    ),
    children: [
      {
        path: '/',
        element: <>FeedPage</>,
      },
    ],
  },
  {
    element: (
      <ProtectGuard onlyAuth={false}>
        <AuthLayout />
      </ProtectGuard>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: routes.SIGN_IN,
        element: <SignInPage />,
      },
      {
        path: routes.SIGN_UP,
        element: <SignUpPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
