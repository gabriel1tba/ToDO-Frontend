import { useContext } from 'react';

import { ToastContext } from 'context/toast';
import { IToastContext } from 'context/toast/interfaces';

const useToastContext = (): IToastContext => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToastContext must be used within ToastProvider');
  }

  return context;
};

export default useToastContext;
