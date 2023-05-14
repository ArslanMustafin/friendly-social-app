import { Button, Col, Layout, Row, Space, Typography } from 'antd';

import { GithubOutlined } from '@ant-design/icons';

import styles from './footer.module.css';

const GITHUB_LINK = 'https://github.com/ArslanMustafin';

const Footer = () => {
  return (
    <Layout.Footer className={styles.footer}>
      <Row align='middle'>
        <Col>
          <Space direction='vertical' align='center'>
            <Button href={GITHUB_LINK} icon={<GithubOutlined />} />
            <Typography.Text>Copyright ©2023 Produced by Mustafin Arslan</Typography.Text>
          </Space>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export { Footer };
