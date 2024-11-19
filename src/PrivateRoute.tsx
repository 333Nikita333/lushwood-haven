import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import useStore from './store';
import { RouteProps } from './types';

const PrivateRoute: FC<RouteProps> = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useStore(state => ({
    isLoggedIn: state.isLoggedIn,
    isRefreshing: state.isRefreshing,
  }));
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
