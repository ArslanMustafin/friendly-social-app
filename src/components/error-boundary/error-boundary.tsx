import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();

  console.error(error);

  return <>Возникла ошибка, Вы можете перезагрузить страницу и попробовать позже.</>;
};

export { ErrorBoundary };
