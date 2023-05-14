import { RootState } from '../utils';

export const watchPostsSelector = (state: RootState) => state.posts;

export const postsSelector = (state: RootState) => watchPostsSelector(state).posts;
export const postsFromUserSelector = (state: RootState) => watchPostsSelector(state).postsFromUser;

export const postsErrorSelector = (state: RootState) => watchPostsSelector(state).error;

export const isFetchPostsRequest = (state: RootState) =>
  watchPostsSelector(state).isFetchPostsRequest;
export const isFetchPostsError = (state: RootState) => watchPostsSelector(state).isFetchPostsError;

export const isFetchPostsFromUserRequest = (state: RootState) =>
  watchPostsSelector(state).isFetchPostsFromUserRequest;
export const isFetchPostsFromUserError = (state: RootState) =>
  watchPostsSelector(state).isFetchPostsFromUserError;

export const isLikePostsRequest = (state: RootState) =>
  watchPostsSelector(state).isLikePostsRequest;
export const isLikePostsError = (state: RootState) => watchPostsSelector(state).isLikePostsError;

export const isDislikePostsRequest = (state: RootState) =>
  watchPostsSelector(state).isDislikePostsRequest;
export const isDislikePostsError = (state: RootState) =>
  watchPostsSelector(state).isDislikePostsError;

export const isAddPostsRequest = (state: RootState) => watchPostsSelector(state).isAddPostsRequest;
export const isAddPostsError = (state: RootState) => watchPostsSelector(state).isAddPostsError;
