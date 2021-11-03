import { useContext } from 'react';

import { ToastContext } from 'context/toast';
import { IToastContext } from 'context/toast/interfaces';

const useToast = (): IToastContext => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast depende do ToastProvider');
  }

  return context;
};

export default useToast;
