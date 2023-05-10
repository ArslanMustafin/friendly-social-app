import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import { userReducer } from './user/slice';
import { RootState } from './utils';

const reducers = combineReducers({
  user: userReducer,
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
