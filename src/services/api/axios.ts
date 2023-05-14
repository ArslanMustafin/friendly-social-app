import axios, { AxiosError } from 'axios';

import { BASE_URL, TOKEN_NAME } from 'utils/constants';
import { deleteCookie, getCookie } from 'utils/cookie';

// Создаем экземпляр Axios:
const api = axios.create({
  baseURL: BASE_URL,
});

// Добавляем заголовок Authorization со значением токена:
api.interceptors.request.use(
  (config) => {
    const token = getCookie(TOKEN_NAME);

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Обрабатываем ошибки авторизации:
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<{ message: string }>) => {
    if (error.response?.status === 401) {
      deleteCookie(TOKEN_NAME);

      return Promise.reject('Для доступа к функционалу, вам нужно авторизоваться');
    }

    return error.response?.data
      ? Promise.reject(error.response?.data)
      : Promise.reject(error.message);
  }
);

export default api;
