import { useState } from 'react';

import { Button, Card, Col, Form, Input, Row, Space } from 'antd';

import { Posts } from 'components/posts/posts';
import { Upload } from 'components/ui/upload';

import { UpdateUserPayloadType } from 'services/api';
import axios from 'services/api/axios';
import { isFetchPostsFromUserRequest, postsFromUserSelector } from 'services/store/posts';
import {
  isUpdateUserRequestSelector,
  updateUserAction,
  userActions,
  userSelector,
} from 'services/store/user';
import { useAppDispatch, useAppSelector } from 'services/store/utils';

import { getFileUrl } from 'utils/get-file-url';
import { getUserInfo } from 'utils/get-user-info';

import { UserType } from 'types/user';

import styles from './settings.module.css';

import { AddPost } from './components/add-post';

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector) as UserType;
  const posts = useAppSelector(postsFromUserSelector);
  const isLoading = useAppSelector(isUpdateUserRequestSelector);

  const isPostsLoading = useAppSelector(isFetchPostsFromUserRequest);

  const [editMode, setEditMode] = useState(false);

  const [form] = Form.useForm();

  const userInfo = {
    age: user?.age,
    city: user?.city,
    university: user?.university,
  };

  const userPosts = posts.filter((post) => post.author === user._id);

  const onValuesChange = () => {
    setEditMode(true);
  };

  const handleResetForm = () => {
    setEditMode(false);
  };
  const handleSubmit = (values: UpdateUserPayloadType) => {
    dispatch(updateUserAction(values));
    setEditMode(false);
  };

  const handleChangeAvatar = (updateAvatar: string) => {
    dispatch(userActions.updateAvatar(updateAvatar));
  };

  const handleChangeAvatarRequest = (file: File) => {
    const formData = new FormData();

    formData.append('avatar', file);

    return axios.post('/user/avatar', formData).then((res) => res.data.avatar);
  };

  return (
    <>
      <Row gutter={32}>
        <Col span={16}>
          <Form
            form={form}
            onFinish={handleSubmit}
            initialValues={user as UserType}
            disabled={isLoading}
            onValuesChange={onValuesChange}
            layout='vertical'
          >
            <div className={styles.form}>
              <Form.Item name='firstname' label='Имя' required>
                <Input />
              </Form.Item>
              <Form.Item name='lastname' label='Фамилия' required>
                <Input />
              </Form.Item>
              <Form.Item name='middlename' label='Отчество'>
                <Input />
              </Form.Item>
              <Form.Item name='age' label='Возраст'>
                <Input type='number' />
              </Form.Item>
              <Form.Item name='university' label='Университет'>
                <Input />
              </Form.Item>
              <Form.Item name='city' label='Город'>
                <Input />
              </Form.Item>
            </div>

            <Form.Item name='email' label='Email' required>
              <Input />
            </Form.Item>
            <Form.Item name='password' label='Пароль'>
              <Input.Password autoComplete='new-password' />
            </Form.Item>
            <Space hidden={!editMode}>
              <Button type='primary' htmlType='submit'>
                Сохранить
              </Button>
              <Button type='default' htmlType='reset' onClick={handleResetForm}>
                Отменить
              </Button>
            </Space>
          </Form>
        </Col>
        <Col className={styles.cardContainer}>
          <Card
            className={styles.card}
            cover={user?.avatar ? <img alt='avatar' src={getFileUrl(user?.avatar)} /> : ''}
          >
            <Card.Meta
              title={`${user?.firstname} ${user?.lastname}`}
              description={getUserInfo(userInfo)}
            />
          </Card>
          <Upload onChange={handleChangeAvatar} onRequest={handleChangeAvatarRequest} />
        </Col>
      </Row>

      <AddPost />
      <Posts isLoading={isPostsLoading} posts={userPosts} showTitle />
    </>
  );
};

export { SettingsPage };
