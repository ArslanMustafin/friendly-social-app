import { Link } from 'react-router-dom';

import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';

import { routes } from 'routes/constants';

// import { loginUserAction } from 'services/store/user/thunk';
// import { useAppDispatch } from 'services/store/utils';
import styles from './sign-up.module.css';

type FormValuesType = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  middlename?: string;
};

const initialValues: FormValuesType = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  middlename: '',
};

const SignUpPage = () => {
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
            Регистрация
          </Typography.Title>
          <Typography.Text>
            Если у вас уже есть аккаунт, то можете -{' '}
            <Link to={routes.SIGN_IN}>
              <b>Войти</b>
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
            label='Придумайте пароль:'
            rules={[
              { required: true, message: 'Пожалуйста введите пароль!' },
              { min: 8, message: 'Пароль должен содержать не менее 8 символов!' },
              { max: 16, message: 'Пароль должен содержать не более 16 символов!' },
            ]}
          >
            <Input.Password placeholder='введите пароль' />
          </Form.Item>

          <Form.Item
            name='firstname'
            label='Имя:'
            rules={[
              { required: true, message: 'Пожалуйста введите своё имя!' },
              { min: 3, message: 'Имя должно содержать не менее 3 букв!' },
            ]}
          >
            <Input placeholder='введите имя' />
          </Form.Item>

          <Form.Item
            name='lastname'
            label='Фамилия:'
            rules={[
              { required: true, message: 'Пожалуйста введите свою фамилию!' },
              { min: 3, message: 'Фамилия должна содержать не менее 3 букв!' },
            ]}
          >
            <Input placeholder='введите фамилию' />
          </Form.Item>

          <Form.Item
            name='middlename'
            label='Отчество:'
            rules={[{ min: 3, message: 'Отчество должно содержать не менее 3 букв!' }]}
          >
            <Input placeholder='введите отчество' />
          </Form.Item>

          <Form.Item className={styles.formSubmit}>
            <Button type='primary' htmlType='submit' block>
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export { SignUpPage };
