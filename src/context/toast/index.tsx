import { createContext, useCallback, useState } from 'react';
import { v4 } from 'uuid';

import ToastContainer from 'components/ToastContainer';

import { IToastProvider, IToastContext, TToastMessage } from './interfaces';

const ToastContext = createContext({} as IToastContext);

const ToastProvider = ({ children }: IToastProvider) => {
  const [toastMessage, setToastMessage] = useState<TToastMessage[]>([]);

  const addToast = useCallback(
    ({
      type,
      title,
      description,
      secondsDuration,
    }: Omit<TToastMessage, 'id'>) => {
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
    []
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

export { ToastProvider, ToastContext };
