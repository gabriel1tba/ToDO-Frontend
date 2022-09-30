export type TToastMessage = {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
  secondsDuration: number;
};

export interface IToastProvider {
  children: React.ReactNode;
}

export interface IToastContext {
  addToast: (message: Omit<TToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}
