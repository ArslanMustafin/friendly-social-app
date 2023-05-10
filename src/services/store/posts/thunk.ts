import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addPost,
  dislikePost,
  getAllPosts,
  getPostsByUser,
  likePost,
  ToggleLikePayloadType,
} from 'services/api/posts';

export const fetchPostsAction = createAsyncThunk('posts/fetch', async () => {
  const posts = await getAllPosts();

  return posts;
});

export const fetchPostsFromUserAction = createAsyncThunk('posts/fetchFromUser', async () => {
  const posts = await getPostsByUser();

  return posts;
});

export const likePostAction = createAsyncThunk(
  'posts/like',
  async (payload: ToggleLikePayloadType) => {
    const post = await likePost(payload);

    return post;
  }
);

export const dislikePostAction = createAsyncThunk(
  'posts/dislike',
  async (payload: ToggleLikePayloadType) => {
    const post = await dislikePost(payload);

    return post;
  }
);

export const addPostAction = createAsyncThunk('user/addPost', async (payload: FormData) => {
  const post = await addPost(payload);

  return post;
});
