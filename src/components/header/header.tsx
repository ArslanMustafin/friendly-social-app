import { Link, useNavigate } from 'react-router-dom';

import { Avatar, Button, ConfigProvider, Layout, Row, Space, theme, Typography } from 'antd';

import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

import { userActions, userSelector } from 'services/store/user';
import { useAppDispatch, useAppSelector } from 'services/store/utils';

import { routes } from 'routes/constants';

import styles from './header.module.css';

import { HeaderLink } from './components';

const Header = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);

  const fullname = `${user?.lastname} ${user?.firstname}`;

  const logout = () => {
    dispatch(userActions.logout());
    navigate(routes.SIGN_IN);
  };

  return (
    <ConfigProvider theme={{ token: { colorText: token.colorTextLightSolid } }}>
      <Layout.Header className={styles.header}>
        <Row justify='space-between' align='middle'>
          <HeaderLink href='/'>
            <Typography.Text className={styles.logo} strong>
              Friendly-Social
            </Typography.Text>
          </HeaderLink>
          <nav className={styles.navigation}>
            <HeaderLink href='/posts'>Посты</HeaderLink>
            <HeaderLink href='/friends'>Друзья</HeaderLink>
          </nav>

          <Space>
            <Link to='/settings' className={styles.avatarContainer}>
              <Avatar icon={<UserOutlined />} className={styles.profileAvatar} src={user?.avatar}>
                {fullname}
              </Avatar>
              <Typography.Text className={styles.profileText}>{fullname}</Typography.Text>
            </Link>
            <Button type='ghost' shape='circle' icon={<LogoutOutlined />} onClick={logout} />
          </Space>
        </Row>
      </Layout.Header>
    </ConfigProvider>
  );
};

export { Header };
