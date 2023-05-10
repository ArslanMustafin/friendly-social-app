import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { SignInPage } from 'pages/sign-in';
import { SignUpPage } from 'pages/sign-up';

import { ErrorBoundary } from 'components/error-boundary';
import { AppLayout, AuthLayout } from 'components/layouts';

import { routes } from './constants';

export const routerConfig: RouteObject[] = [
  {
    element: <AuthLayout />,
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
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <>FeedPage</>,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
