import { useState } from 'react';

import { message, Upload as AntUpload, UploadProps } from 'antd';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import { checkFile } from 'utils/check-file';

import styles from './upload.module.css';

type PropsType = {
  uploadText?: string;
  onRequest: (file: File) => Promise<unknown>;
  onChange: (imageUrl: string) => void;
};

const Upload = ({ uploadText = 'Загрузить изображение', onChange, onRequest }: PropsType) => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const beforeUpload = (file: File) => {
    return checkFile(file, messageApi);
  };

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      setLoading(false);
      onChange(URL.createObjectURL(info.file.originFileObj as File));
    }
  };

  const handleRemove = () => {
    onChange('');
  };

  const handleRequest: UploadProps['customRequest'] = ({ file }) => {
    onRequest(file as File)
      .then(() => {
        setLoading(false);
        onChange(URL.createObjectURL(file as File));
        messageApi.success('Картинка успешно обновлена!');
      })
      .catch((error) => {
        message.error(error);
      });
  };

  return (
    <>
      {contextHolder}
      <AntUpload
        name='avatar'
        listType='picture-card'
        className={styles.avatarUploader}
        showUploadList={false}
        onChange={handleChange}
        beforeUpload={beforeUpload}
        onRemove={handleRemove}
        customRequest={handleRequest}
      >
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div>{loading ? 'Загрузка...' : uploadText}</div>
        </div>
      </AntUpload>
    </>
  );
};

export { Upload };
