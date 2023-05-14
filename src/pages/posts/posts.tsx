import { Posts } from 'components/posts';

import { isFetchPostsRequest, postsSelector } from 'services/store/posts';
import { useAppSelector } from 'services/store/utils';

const PostsPage = () => {
  const posts = useAppSelector(postsSelector);

  const isPostsLoading = useAppSelector(isFetchPostsRequest);

  return (
    <>
      <Posts isLoading={isPostsLoading} posts={posts} />
    </>
  );
};

export { PostsPage };
