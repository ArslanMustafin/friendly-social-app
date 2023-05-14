import dayjs from 'dayjs';

import { Card, List } from 'antd';

import { HeartFilled, HeartOutlined } from '@ant-design/icons';

import { dislikePostAction, likePostAction } from 'services/store/posts';
import { userSelector } from 'services/store/user';
import { useAppDispatch, useAppSelector } from 'services/store/utils';

import { checkLike } from 'utils/check-like';
import { getFileUrl } from 'utils/get-file-url';

import { PostType } from 'types/post';

type PropsType = {
  posts: PostType[];
  isLoading: boolean;
  showTitle?: boolean;
};

const Posts = ({ showTitle, isLoading, posts }: PropsType) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(userSelector);

  const handleLikePost = (postId: string) => {
    dispatch(likePostAction({ postId }));
  };
  const handleDislikePost = (postId: string) => {
    dispatch(dislikePostAction({ postId }));
  };

  const likeAction = (likes: string[], userId: string, postId: string) => {
    return checkLike(likes, userId) ? (
      <HeartFilled key='dislike' onClick={() => handleDislikePost(postId)} />
    ) : (
      <HeartOutlined key='like' onClick={() => handleLikePost(postId)} />
    );
  };
  return (
    <List
      header={showTitle ? <h2>Посты пользователя:</h2> : ''}
      dataSource={posts}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 4,
      }}
      loading={isLoading}
      renderItem={(item) => (
        <List.Item>
          <Card
            cover={<img alt='post Image' src={getFileUrl(item.image)} />}
            actions={[likeAction(item.likes as string[], user?._id as string, item._id)]}
          >
            {item.text}
            <br />
            <br />
            Дата создания: {dayjs(item.createdAt).format('DD.MM.YYYY в HH:mm:ss')}
            <br />
            Количество лайков: {item.likes.length}
          </Card>
        </List.Item>
      )}
    />
  );
};

export { Posts };
