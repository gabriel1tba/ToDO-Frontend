import {
  useState,
  createContext,
  useCallback,
  ReactNode,
  useContext,
} from 'react';
import api from '../services/api';

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
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    return token && user
      ? { token, user: JSON.parse(user) }
      : ({} as IAuthState);
  });

  const signIn = useCallback(async ({ email, password }) => {
    const {
      data: { token, user },
    } = await api.post('sessions', {
      email,
      password,
    });

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setUserData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

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

  if (!context) throw new Error('');

  return context;
};

export { AuthProvider, useAuth };
