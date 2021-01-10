import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps } from 'react-router';
import { selectIsLoggedIn } from '../../../../auth/presentation/adapters/redux/user/user.selectors';
import withGuard from '../hocs/withGuard';

const AuthGuardRoute: FunctionComponent = (props: RouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const ProtectedRouteOrRedirect = withGuard(isLoggedIn, '/register')(Route);
  return <ProtectedRouteOrRedirect {...props} />;
};

export default AuthGuardRoute;
