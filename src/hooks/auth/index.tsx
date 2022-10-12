import { useContext } from 'react';

import { AuthContext } from 'context/auth';
import { IAuthContext } from 'context/auth/interfaces';

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth depends on AuthProvider');

  return context;
};

export default useAuth;
