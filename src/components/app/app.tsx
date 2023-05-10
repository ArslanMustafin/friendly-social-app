import { RouterProvider } from 'react-router-dom';

import { router } from 'routes/index';

export const App = () => {
  return <RouterProvider router={router} />;
};
