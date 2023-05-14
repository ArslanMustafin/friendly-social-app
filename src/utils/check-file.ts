import { message } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';

import { IMAGES_FORMATS } from './constants';

export const checkFile = (file: File, messageApi: MessageInstance = message) => {
  const isJpgOrPng = IMAGES_FORMATS.includes(file.type);

  if (!isJpgOrPng) {
    messageApi.error('Вы можете загружать только файлы формата JPG/PNG!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    messageApi.error('Изображение должно быть меньше 2MB!');
  }

  return isJpgOrPng && isLt2M;
};
