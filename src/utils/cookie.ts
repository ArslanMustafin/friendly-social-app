/**
 * Добавляет cookie
 * @param name - Название cookie
 * @param value - Значение cookie
 * @param hours - Количество часов, на которые cookie должна быть активной, по умолчанию 3 часа
 */
export const setCookie = (name: string, value: string, hours = 5) => {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
};

/**
 * Достает значение cookie по имени
 * @param name - Название cookie
 * @returns Значение cookie
 */
export const getCookie = (name: string): string => {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(name + '=') === 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return '';
};

/**
 * Удаляет cookie по имени
 * @param name - Название cookie
 */
export const deleteCookie = (name: string) => {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
};
