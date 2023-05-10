import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { fetchUserAction } from 'services/store/user/thunk';
import { useAppDispatch } from 'services/store/utils';

import { router } from 'routes/index';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserAction());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};
