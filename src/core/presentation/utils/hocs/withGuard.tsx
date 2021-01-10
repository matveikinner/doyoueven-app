import React, { ComponentType } from 'react';
import { Redirect, RouteProps } from 'react-router-dom';

const withGuard = (canActivate: boolean, redirectPath?: string) => <P extends RouteProps>(
  Component: ComponentType<P>
): ComponentType<P> => {
  const WithGuard = (props: P) => {
    if (canActivate) return <Component {...props} />;
    return <Redirect to={redirectPath || '/'} />;
  };
  return WithGuard;
};

export default withGuard;
