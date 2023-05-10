import { Link } from 'react-router-dom';

import { Avatar, ConfigProvider, Layout, Row, theme, Typography } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import { userSelector } from 'services/store/user';
import { useAppSelector } from 'services/store/utils';

import styles from './header.module.css';

import { HeaderLink } from './components';

const Header = () => {
  const { token } = theme.useToken();

  const user = useAppSelector(userSelector);

  const fullname = `${user?.lastname} ${user?.firstname}`;

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

          <Link to='/settings' className={styles.avatarContainer}>
            <Avatar icon={<UserOutlined />} className={styles.profileAvatar} src={user?.avatar}>
              {fullname}
            </Avatar>
            <Typography.Text className={styles.profileText}>{fullname}</Typography.Text>
          </Link>
        </Row>
      </Layout.Header>
    </ConfigProvider>
  );
};

export { Header };
