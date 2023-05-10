import { SerializedError } from '@reduxjs/toolkit';

import { message } from 'antd';

export const rejectionHandler = (error: SerializedError) => {
  const errorMessage = error.message || 'Неизвестная ошибка';

  message.error(errorMessage);
  return errorMessage;
};
