import { createSlice } from '@reduxjs/toolkit';

import { rejectionHandler } from 'utils/rejectErrors';

import { UserType } from 'types/user';

import { fetchUserAction, loginUserAction, registerUserAction } from './thunk';

type UserStateType = {
  user: UserType | null;
  error: string;
  isAuthChecked: boolean;
  isFetchUserRequest: boolean;
  isFetchUserError: boolean;
  isLoginUserRequest: boolean;
  isLoginUserError: boolean;
  isRegisterUserRequest: boolean;
  isRegisterUserError: boolean;
};

export const initialState: UserStateType = {
  user: null,
  isAuthChecked: false,
  error: '',

  isFetchUserRequest: false,
  isFetchUserError: false,

  isLoginUserError: false,
  isLoginUserRequest: false,

  isRegisterUserError: false,
  isRegisterUserRequest: false,
};

const NAME = 'user';

export const { reducer: userReducer, actions: userActions } = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAction.pending, (state) => {
        state.isFetchUserRequest = true;
        state.isFetchUserError = false;
        state.error = '';
      })
      .addCase(fetchUserAction.fulfilled, (state, action) => {
        state.isFetchUserRequest = false;
        state.isFetchUserError = false;
        state.isAuthChecked = true;
        state.user = action.payload;
      })
      .addCase(fetchUserAction.rejected, (state, action) => {
        state.isFetchUserRequest = false;
        state.isFetchUserError = true;
        state.isAuthChecked = true;
        state.user = null;
        state.error = rejectionHandler(action.error);
      });

    /**
     * Login user
     */
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.isLoginUserRequest = true;
        state.isLoginUserError = false;
        state.error = '';
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.isLoginUserRequest = false;
        state.isLoginUserError = false;
        state.isAuthChecked = true;
        state.user = action.payload;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoginUserRequest = false;
        state.isLoginUserError = true;
        state.error = rejectionHandler(action.error);
      });

    /**
     * Register user
     */
    builder
      .addCase(registerUserAction.pending, (state) => {
        state.isRegisterUserRequest = true;
        state.isRegisterUserError = false;
        state.error = '';
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.isRegisterUserRequest = false;
        state.isRegisterUserError = false;
        state.isAuthChecked = true;
        state.user = action.payload;
      })
      .addCase(registerUserAction.rejected, (state, action) => {
        state.isRegisterUserRequest = false;
        state.isRegisterUserError = true;
        state.error = rejectionHandler(action.error);
      });
  },
});
