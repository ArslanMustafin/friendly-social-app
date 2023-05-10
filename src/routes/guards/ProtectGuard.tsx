import { Navigate, useLocation } from 'react-router-dom';

import { Loader } from 'components/ui/loader';

import { isAuthCheckedSelector, userSelector } from 'services/store/user/selectors';
import { useAppSelector } from 'services/store/utils';

import { routes } from 'routes/constants';

type PropsType = {
  onlyAuth?: boolean;
  children: React.ReactElement;
};

const ProtectGuard = ({ children, onlyAuth = true }: PropsType) => {
  const location = useLocation();
  const isAuthChecked = useAppSelector(isAuthCheckedSelector);
  const user = useAppSelector(userSelector);

  if (!isAuthChecked) return <Loader />;

  if (!onlyAuth && user) {
    const { from } = location.state || { from: { pathname: '/' } };

    return <Navigate to={from} />;
  }

  if (onlyAuth && !user) {
    return <Navigate to={routes.SIGN_IN} state={{ from: location }} />;
  }

  return children;
};

export { ProtectGuard };
