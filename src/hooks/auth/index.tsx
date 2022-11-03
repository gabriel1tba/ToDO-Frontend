import { useContext } from 'react';

import { AuthContext } from 'context/auth';
import { IAuthContext } from 'context/auth/interfaces';

const useAuthContext = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error('useAuthContext must be used within AuthProvider');

  return context;
};

export default useAuthContext;
