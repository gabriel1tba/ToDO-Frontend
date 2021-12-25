import { useState, createContext, useCallback } from 'react';

import HttpClient from 'services/utils/HttpClient';

import UserService from 'services/UserService';

import { IAuthContext, IAuthProvider, IAuthState } from './interfaces';

const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem('@TodoApp:token');
    const user = localStorage.getItem('@TodoApp:user');

    if (token && user) {
      HttpClient.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const {
      data: { token, user },
    } = await UserService.createUserSession({ email, password });

    localStorage.setItem('@TodoApp:token', token);
    localStorage.setItem('@TodoApp:user', JSON.stringify(user));

    HttpClient.defaults.headers.authorization = `Bearer ${token}`;

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

export { AuthProvider, AuthContext };
