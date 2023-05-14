import { AxiosError } from 'axios';

import { PostType } from 'types/post';

import api from './axios';

export const addPost = (payload: FormData) => {
  return api
    .post<PostType>(`/posts`, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};

export const getPostsByUser = () => {
  return api
    .get<PostType[]>(`/posts/user`)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};

export const getAllPosts = () => {
  return api
    .get<PostType[]>(`/posts`)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};

export type ToggleLikePayloadType = {
  postId: string;
};

export const likePost = ({ postId }: ToggleLikePayloadType) => {
  return api
    .post<PostType>(`/posts/${postId}/like`)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};

export const dislikePost = ({ postId }: ToggleLikePayloadType) => {
  return api
    .delete<PostType>(`/posts/${postId}/like`)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};
