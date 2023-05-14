import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';

import { Footer } from 'components/footer';

import styles from './auth-layout.module.css';

const { Content } = Layout;

const AuthLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export { AuthLayout };
