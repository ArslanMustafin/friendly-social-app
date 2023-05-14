import { AxiosError } from 'axios';

import { BaseUserType, UserType } from 'types/user';

import api from './axios';

export type AuthResultType = {
  token: string;
  user: UserType;
};

export const fetchUser = () => {
  return api
    .get<UserType>(`/auth/profile`)
    .then((response) => {
      return response.data;
    })
    .catch((error: string) => {
      throw new Error(error);
    });
};

export type LoginUserPayloadType = Pick<BaseUserType, 'email' | 'password'>;

export type LoginUserResultType = AuthResultType;

export const loginUser = (payload: LoginUserPayloadType) => {
  return api
    .post<LoginUserResultType>(`/auth/login`, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};

export type RegisterUserPayloadType = Pick<
  BaseUserType,
  'email' | 'password' | 'firstname' | 'lastname' | 'middlename'
>;

export type RegisterResultType = AuthResultType;

export const registerUser = (payload: RegisterUserPayloadType) => {
  return api
    .post<RegisterResultType>(`/auth/register`, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};

export type UpdateUserPayloadType = Omit<UserType, 'avatar'> & Pick<BaseUserType, 'password'>;

export type UpdateResultType = UserType;

export const updateUser = (payload: RegisterUserPayloadType) => {
  return api
    .patch<UpdateResultType>(`/user`, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};
