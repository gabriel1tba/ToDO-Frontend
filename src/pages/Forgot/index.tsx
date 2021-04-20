import { useCallback } from 'react';
import { useHistory } from 'react-router';

import Header from '../../components/Header';

const Forgot = () => {
  const history = useHistory();

  const handleSignOut = useCallback(() => {
    history.push('/');
  }, [history]);

  return <Header handleSignOut={handleSignOut} />;
};

export default Forgot;
