import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { fetchPostsAction, fetchPostsFromUserAction } from 'services/store/posts';
import { userSelector } from 'services/store/user';
import { fetchUserAction } from 'services/store/user/thunk';
import { useAppDispatch, useAppSelector } from 'services/store/utils';

import { router } from 'routes/index';

export const App = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const id = user?._id;

  useEffect(() => {
    dispatch(fetchUserAction());
  }, [dispatch]);

  useEffect(() => {
    if (!id) return;

    console.log('updater user');

    dispatch(fetchPostsFromUserAction());
    dispatch(fetchPostsAction());
  }, [dispatch, id]);

  return <RouterProvider router={router} />;
};
