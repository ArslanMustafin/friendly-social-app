import { Posts } from 'components/posts/posts';

import { isFetchPostsFromUserRequest, postsFromUserSelector } from 'services/store/posts';
import { useAppSelector } from 'services/store/utils';

const FeedPage = () => {
  const posts = useAppSelector(postsFromUserSelector);
  const isPostsLoading = useAppSelector(isFetchPostsFromUserRequest);

  return (
    <>
      <Posts isLoading={isPostsLoading} posts={posts} />
    </>
  );
};

export { FeedPage };
