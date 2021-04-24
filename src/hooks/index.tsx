import { ReactNode } from 'react';
import { AuthProvider } from './auth';
import { TodoProvider } from './todos';
import { ToastProvider } from './toast';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => (
  <AuthProvider>
    <ToastProvider>
      <TodoProvider>{children}</TodoProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
