import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { TodoProvider } from './todos';

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => (
  <AuthProvider>
    <ToastProvider>
      <TodoProvider>{children}</TodoProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
