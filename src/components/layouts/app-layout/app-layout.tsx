import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';

import { Footer } from 'components/footer';
import { Header } from 'components/header';

import styles from './app-layout.module.css';

const AppLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout className='site-layout'>
        <Layout.Content className={styles.content}>
          <Outlet />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export { AppLayout };
