import { UserType } from 'types/user';

type UserInfoType = Pick<UserType, 'age' | 'city' | 'university'>;

export const getUserInfo = (userInfo: UserInfoType): string => {
  const result: string[] = [];

  Object.keys(userInfo).forEach((key) => {
    const value = userInfo[key as keyof UserInfoType]?.toString();

    if (!value) return;

    if (key === 'age') {
      result.push(`Возраст: ${value}`);
      return;
    }

    if (key === 'university') {
      result.push(`Университет: ${value}`);
      return;
    }

    result.push(value);
  });

  return result.join(', ');
};
