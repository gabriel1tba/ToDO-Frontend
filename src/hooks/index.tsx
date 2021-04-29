import { ReactNode } from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
