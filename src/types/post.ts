import { UserType } from './user';

export type PostType = {
  _id: string;
  __v: number;
  text: string;
  image?: string;
  likes: UserType[] | string[];
  author: string | UserType;
  createdAt: Date;
  updatedAt: Date;
};
