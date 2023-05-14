import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TOKEN_NAME } from 'utils/constants';
import { deleteCookie } from 'utils/cookie';
import { rejectionHandler } from 'utils/reject-errors';

import { UserType } from 'types/user';

import { fetchUserAction, loginUserAction, registerUserAction, updateUserAction } from './thunk';

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
  isUpdateUserRequest: boolean;
  isUpdateUserError: boolean;
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

  isUpdateUserError: false,
  isUpdateUserRequest: false,
};

const NAME = 'user';

const updateAvatar: CaseReducer<UserStateType, PayloadAction<string>> = (state, action) => {
  state.user = { ...(state.user as UserType), avatar: action.payload };
};
const logout: CaseReducer = () => {
  deleteCookie(TOKEN_NAME);

  return { ...initialState, isAuthChecked: true };
};

export const { reducer: userReducer, actions: userActions } = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: { updateAvatar, logout },
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

    /**
     * Update user
     */
    builder
      .addCase(updateUserAction.pending, (state) => {
        state.isUpdateUserRequest = true;
        state.isUpdateUserError = false;
        state.error = '';
      })
      .addCase(updateUserAction.fulfilled, (state, action) => {
        state.isUpdateUserRequest = false;
        state.isUpdateUserError = false;
        state.user = action.payload;
      })
      .addCase(updateUserAction.rejected, (state, action) => {
        state.isUpdateUserRequest = false;
        state.isUpdateUserError = true;
        state.error = rejectionHandler(action.error);
      });
  },
});
