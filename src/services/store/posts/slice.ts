import { createSlice } from '@reduxjs/toolkit';

import { rejectionHandler } from 'utils/reject-errors';

import { PostType } from '../../../types/post';

import {
  addPostAction,
  dislikePostAction,
  fetchPostsAction,
  fetchPostsFromUserAction,
  likePostAction,
} from './thunk';

type PostsStateType = {
  posts: PostType[];
  postsFromUser: PostType[];
  error: string;
  isFetchPostsRequest: boolean;
  isFetchPostsError: boolean;
  isFetchPostsFromUserRequest: boolean;
  isFetchPostsFromUserError: boolean;
  isLikePostsRequest: boolean;
  isLikePostsError: boolean;
  isDislikePostsRequest: boolean;
  isDislikePostsError: boolean;
  isAddPostsRequest: boolean;
  isAddPostsError: boolean;
};

export const initialState: PostsStateType = {
  posts: [],
  postsFromUser: [],
  error: '',

  isFetchPostsError: false,
  isFetchPostsRequest: false,

  isLikePostsError: false,
  isLikePostsRequest: false,

  isDislikePostsError: false,
  isDislikePostsRequest: false,

  isAddPostsError: false,
  isAddPostsRequest: false,

  isFetchPostsFromUserRequest: false,
  isFetchPostsFromUserError: false,
};

const NAME = 'posts';

export const { reducer: postsReducer, actions: postsActions } = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAction.pending, (state) => {
        state.isFetchPostsRequest = true;
        state.isFetchPostsError = false;
        state.error = '';
      })
      .addCase(fetchPostsAction.fulfilled, (state, action) => {
        state.isFetchPostsRequest = false;
        state.isFetchPostsError = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsAction.rejected, (state, action) => {
        state.isFetchPostsRequest = false;
        state.isFetchPostsError = true;
        state.posts = [];
        state.error = rejectionHandler(action.error);
      });

    builder
      .addCase(fetchPostsFromUserAction.pending, (state) => {
        state.isFetchPostsFromUserRequest = true;
        state.isFetchPostsFromUserError = false;
        state.error = '';
      })
      .addCase(fetchPostsFromUserAction.fulfilled, (state, action) => {
        state.isFetchPostsFromUserRequest = false;
        state.isFetchPostsFromUserError = false;
        state.postsFromUser = action.payload;
      })
      .addCase(fetchPostsFromUserAction.rejected, (state, action) => {
        state.isFetchPostsFromUserRequest = false;
        state.isFetchPostsFromUserError = true;
        state.postsFromUser = [];
        state.error = rejectionHandler(action.error);
      });

    /**
     * Like post
     */
    builder
      .addCase(likePostAction.pending, (state) => {
        state.isLikePostsRequest = true;
        state.isLikePostsError = false;
        state.error = '';
      })
      .addCase(likePostAction.fulfilled, (state, action) => {
        state.isLikePostsRequest = false;
        state.isLikePostsError = false;
        state.posts = state.posts.map((post) => {
          if (post._id === action.payload._id) return action.payload;

          return post;
        });
        state.postsFromUser = state.postsFromUser.map((post) => {
          if (post._id === action.payload._id) return action.payload;

          return post;
        });
      })
      .addCase(likePostAction.rejected, (state, action) => {
        state.isLikePostsRequest = false;
        state.isLikePostsError = true;
        state.error = rejectionHandler(action.error);
      });

    /**
     * Dislike post
     */
    builder
      .addCase(dislikePostAction.pending, (state) => {
        state.isDislikePostsRequest = true;
        state.isDislikePostsError = false;
        state.error = '';
      })
      .addCase(dislikePostAction.fulfilled, (state, action) => {
        state.isDislikePostsRequest = false;
        state.isDislikePostsError = false;
        state.posts = state.posts.map((post) => {
          if (post._id === action.payload._id) return action.payload;

          return post;
        });
        state.postsFromUser = state.postsFromUser.map((post) => {
          if (post._id === action.payload._id) return action.payload;

          return post;
        });
      })
      .addCase(dislikePostAction.rejected, (state, action) => {
        state.isDislikePostsRequest = false;
        state.isDislikePostsError = true;
        state.error = rejectionHandler(action.error);
      });

    /**
     * Add post
     */
    builder
      .addCase(addPostAction.pending, (state) => {
        state.isAddPostsRequest = true;
        state.isAddPostsError = false;
        state.error = '';
      })
      .addCase(addPostAction.fulfilled, (state, action) => {
        state.isAddPostsRequest = false;
        state.isAddPostsError = false;

        state.posts.unshift(action.payload);
        state.postsFromUser.unshift(action.payload);
      })
      .addCase(addPostAction.rejected, (state, action) => {
        state.isAddPostsRequest = false;
        state.isAddPostsError = true;
        state.error = rejectionHandler(action.error);
      });
  },
});
