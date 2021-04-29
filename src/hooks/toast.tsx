import {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from 'react';

import ToastContainer from 'components/ToastContainer';

import v4 from 'utils/uuidv4';

interface IToastContext {
  addToast: (message: Omit<IToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

interface IToastProvider {
  children: ReactNode;
}

export interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
  secondsDuration: number;
}

const ToastContext = createContext({} as IToastContext);

const ToastProvider = ({ children }: IToastProvider) => {
  const [toastMessage, setToastMessage] = useState<IToastMessage[]>([]);

  const addToast = useCallback(
    ({
      type,
      title,
      description,
      secondsDuration,
    }: Omit<IToastMessage, 'id'>) => {
      const id = v4();

      const toast = {
        id,
        type,
        title,
        description,
        secondsDuration,
      };

      setToastMessage((prevState) => [...prevState, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToastMessage((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={toastMessage} />
    </ToastContext.Provider>
  );
};

const useToast = (): IToastContext => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast depende do ToastProvider');
  }

  return context;
};

export { ToastProvider, useToast };
