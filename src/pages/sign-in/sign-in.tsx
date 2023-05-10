import { Link } from 'react-router-dom';

import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';

import { routes } from 'routes/constants';

// import { loginUserAction } from 'services/store/user/thunk';
// import { useAppDispatch } from 'services/store/utils';
import styles from './sign-in.module.css';

type FormValuesType = {
  email: string;
  password: string;
};

const initialValues: FormValuesType = {
  email: 'test@gmail.com',
  password: 'test-password',
};

const SignInPage = () => {
  // const dispatch = useAppDispatch();

  const onFinish = (values: FormValuesType) => {
    console.log(values);

    // dispatch(loginUserAction(values));
  };

  return (
    <Row className={styles.root}>
      <Col xs={20} sm={14} md={12} lg={10} xl={8} xxl={6} className={styles.content}>
        <Space direction='vertical' align='center'>
          <Typography.Title className={styles.title} level={1}>
            Авторизация
          </Typography.Title>
          <Typography.Text>
            Если у вас уже нет аккаунта, то можете -{' '}
            <Link to={routes.SIGN_UP}>
              <b>Зарегистрироваться</b>
            </Link>
          </Typography.Text>
        </Space>

        <Form
          name='auth-form'
          onFinish={onFinish}
          className={styles.content}
          layout='vertical'
          initialValues={initialValues}
        >
          <Form.Item
            name='email'
            label='Email:'
            rules={[{ required: true, message: 'Пожалуйста введите email!', type: 'email' }]}
          >
            <Input placeholder='введите Email' />
          </Form.Item>

          <Form.Item
            name='password'
            label='Пароль:'
            rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
          >
            <Input.Password placeholder='введите Пароль' />
          </Form.Item>

          <Form.Item className={styles.formSubmit}>
            <Button type='primary' htmlType='submit' block>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export { SignInPage };
