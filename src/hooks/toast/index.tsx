import { useContext } from 'react';

import { ToastContext } from 'context/toast';
import { IToastContext } from 'context/toast/interfaces';

const useToast = (): IToastContext => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast depends on ToastProvider');
  }

  return context;
};

export default useToast;
