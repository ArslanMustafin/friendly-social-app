import { Avatar, ConfigProvider, Layout, Row, Space, theme, Typography } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import styles from './header.module.css';

const Header = () => {
  const { token } = theme.useToken();
  // const user = useAppSelector(userSelector);

  const fullname = `Иван Иванов`;

  return (
    <ConfigProvider theme={{ token: { colorText: token.colorTextLightSolid } }}>
      <Layout.Header className={styles.header}>
        <Row justify='space-between' align='middle'>
          <Typography.Text className={styles.logo} strong>
            Friendly-Social
          </Typography.Text>

          <Space>
            <Avatar icon={<UserOutlined />} className={styles.profileAvatar}>
              {fullname}
            </Avatar>
            <Typography.Text className={styles.profileText}>{fullname}</Typography.Text>
          </Space>
        </Row>
      </Layout.Header>
    </ConfigProvider>
  );
};

export { Header };
