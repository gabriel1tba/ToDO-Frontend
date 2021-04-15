import {
  useState,
  createContext,
  useCallback,
  ReactNode,
  useContext,
} from 'react';
import api from '../services/api';

interface SignInCrendentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  created_at: string;
  updated_at: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthContextProps {
  user: User;
  signIn: (crendentials: SignInCrendentials) => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    return token && user
      ? { token, user: JSON.parse(user) }
      : ({} as AuthState);
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

    setUserData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: userData.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('');

  return context;
};

export { AuthProvider, useAuth };
