import { RootState } from '../utils';

export const watchUserSelector = (state: RootState) => state.user;

export const userSelector = (state: RootState) => watchUserSelector(state).user;
export const userErrorSelector = (state: RootState) => watchUserSelector(state).error;

export const isAuthCheckedSelector = (state: RootState) => watchUserSelector(state).isAuthChecked;

export const isFetchRequestSelector = (state: RootState) =>
  watchUserSelector(state).isFetchUserRequest;
export const isFetchErrorSelector = (state: RootState) => watchUserSelector(state).isFetchUserError;

export const isLoginRequestSelector = (state: RootState) =>
  watchUserSelector(state).isLoginUserRequest;
export const isLoginErrorSelector = (state: RootState) => watchUserSelector(state).isLoginUserError;

export const isRegisterRequestSelector = (state: RootState) =>
  watchUserSelector(state).isRegisterUserRequest;
export const isRegisterErrorSelector = (state: RootState) =>
  watchUserSelector(state).isRegisterUserError;
