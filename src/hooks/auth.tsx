import {
  useState,
  createContext,
  useCallback,
  ReactNode,
  useContext,
} from 'react';

import api from 'services/api';

interface ISignInCrendentials {
  email: string;
  password: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface IAuthContext {
  user: IUser;
  signIn: (crendentials: ISignInCrendentials) => Promise<void>;
  signOut: () => void;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem('@TodoApp:token');
    const user = localStorage.getItem('@TodoApp:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const {
      data: { token, user },
    } = await api.post('auth', {
      email,
      password,
    });

    localStorage.setItem('@TodoApp:token', token);
    localStorage.setItem('@TodoApp:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUserData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@TodoApp:token');
    localStorage.removeItem('@TodoApp:user');

    setUserData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: userData.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth depende do AuthProvider');

  return context;
};

export { AuthProvider, useAuth };
