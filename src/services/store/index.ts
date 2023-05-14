import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import { userReducer } from './user/slice';
import { postsReducer } from './posts';
import { RootState } from './utils';

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export const rootReducer = reducers;

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: true,
  });
};

export const store = setupStore();
