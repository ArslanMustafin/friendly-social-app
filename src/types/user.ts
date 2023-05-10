import { PostType } from './post';

export type BaseUserType = {
  _id: string;
  __v: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  middlename?: string;
  token?: string;
  avatar?: string;
  age?: number;
  city?: string;
  university?: string;
  friends: string[] | UserType[];
  posts: string[] | PostType[];
};

export type UserType = Omit<BaseUserType, 'password' | 'token'>;
