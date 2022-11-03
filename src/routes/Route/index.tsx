import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuthContext } from 'hooks';

interface IRoute extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route = ({
  isPrivate = false,
  component: Component,
  ...props
}: IRoute) => {
  const { user: Logged } = useAuthContext();

  return (
    <ReactDOMRoute
      {...props}
      render={({ location }) => {
        return isPrivate === !!Logged ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
