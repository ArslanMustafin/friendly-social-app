import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { rootReducer, setupStore } from '.';

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;

export const useAppDispatch = () => useDispatch<AppStore['dispatch']>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
