import { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import Loader from 'components/Loader';

import Route from './Route';

const SignIn = lazy(() => import('pages/SignIn'));
const SignUp = lazy(() => import('pages/SignUp'));
const Forgot = lazy(() => import('pages/Forgot'));
const Home = lazy(() => import('pages/Home'));

const Routes = () => {
  return (
    <Suspense fallback={<Loader size={90} alwaysOnTop />}>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/home" component={Home} isPrivate />
      </Switch>
    </Suspense>
  );
};

export default Routes;
