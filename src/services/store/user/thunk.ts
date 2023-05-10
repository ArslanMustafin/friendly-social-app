import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchUser,
  loginUser,
  LoginUserPayloadType,
  registerUser,
  RegisterUserPayloadType,
  updateUser,
  UpdateUserPayloadType,
} from 'services/api';

import { TOKEN_NAME } from 'utils/constants';
import { setCookie } from 'utils/cookie';

export const fetchUserAction = createAsyncThunk('user/fetchUser', async () => {
  const user = await fetchUser();

  return user;
});

export const loginUserAction = createAsyncThunk(
  'user/loginUser',
  async (payload: LoginUserPayloadType) => {
    const { token, user } = await loginUser(payload);

    setCookie(TOKEN_NAME, token);

    return user;
  }
);

export const registerUserAction = createAsyncThunk(
  'user/registerUser',
  async (payload: RegisterUserPayloadType) => {
    const { token, user } = await registerUser(payload);

    setCookie(TOKEN_NAME, token);

    return user;
  }
);

export const updateUserAction = createAsyncThunk(
  'user/updateUser',
  async (payload: UpdateUserPayloadType) => {
    const user = await updateUser(payload);

    return user;
  }
);
