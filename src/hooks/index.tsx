import { ReactNode } from 'react';
import { AuthProvider } from './auth';
import { TodoProvider } from './todos';
import { ToastProvider } from './toast';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => (
  <AuthProvider>
    <TodoProvider>
      <ToastProvider>{children}</ToastProvider>
    </TodoProvider>
  </AuthProvider>
);

export default AppProvider;
