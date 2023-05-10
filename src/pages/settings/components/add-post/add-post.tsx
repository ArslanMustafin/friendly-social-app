import { useState } from 'react';

import { Button, Form, Input, message, Typography, Upload, UploadProps } from 'antd';

import { UploadOutlined } from '@ant-design/icons';

import { addPostAction, isAddPostsRequest } from 'services/store/posts';
import { useAppDispatch, useAppSelector } from 'services/store/utils';

import { checkFile } from 'utils/check-file';

type FormValuesType = {
  text: string;
  image: { file: File; fileList: File[] };
};

const initialValues = {
  text: '',
  image: null,
};

const AddPost = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isAddPostsRequest);

  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (values: FormValuesType) => {
    if (!image) return messageApi.error('Загрузите изображение');

    if (!checkFile(image as File, messageApi)) return;

    const formData = new FormData();

    formData.append('image', image as File);
    formData.append('text', values.text);

    dispatch(addPostAction(formData)).then(() => {
      form.resetFields();
    });
  };

  const beforeUpload: UploadProps['beforeUpload'] = () => {
    return false;
  };

  const handleChangeImage: UploadProps['onChange'] = ({ fileList }) => {
    const file = fileList[0]?.originFileObj as File;

    if (file) {
      checkFile(file, messageApi);
    }

    setImage(file);
  };

  return (
    <>
      {contextHolder}
      <div>
        <Typography.Title level={3}>Добавить пост</Typography.Title>
        <Form
          form={form}
          onFinish={handleSubmit}
          initialValues={initialValues}
          disabled={isLoading}
          layout='vertical'
        >
          <Form.Item name='text' label='Текст' required>
            <Input.TextArea rows={4} showCount required />
          </Form.Item>

          <Form.Item name='image' label='Картинка для поста' valuePropName='file' required>
            <Upload
              listType='picture'
              maxCount={1}
              beforeUpload={beforeUpload}
              onChange={handleChangeImage}
            >
              <Button icon={<UploadOutlined />}>загрузить картинку</Button>
            </Upload>
          </Form.Item>
          <Button type='primary' htmlType='submit' loading={isLoading}>
            Сохранить
          </Button>
        </Form>
      </div>
    </>
  );
};

export { AddPost };
