import {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from 'react';

import { useAuth } from './auth';

import api from '../services/api';

interface ITodo {
  id: string;
  user_id: string;
  completed: boolean;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

interface ITodoContext {
  todos: ITodo[];
  getTodos: () => void;
}

interface ITodoProvider {
  children: ReactNode;
}

const TodoContext = createContext({} as ITodoContext);

const TodoProvider = ({ children }: ITodoProvider) => {
  const { user } = useAuth();

  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodos = useCallback(async () => {
    const { data } = await api.get(`todos/${user.id}`);

    setTodos(data);
  }, [user.id]);

  return (
    <TodoContext.Provider value={{ todos, getTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodos = (): ITodoContext => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

export { TodoProvider, useTodos };
