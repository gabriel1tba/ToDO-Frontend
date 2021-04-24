import {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from 'react';

import { useToast } from './toast';
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
  handleGetTodos: () => void;
}

interface ITodoProvider {
  children: ReactNode;
}

const TodoContext = createContext({} as ITodoContext);

const TodoProvider = ({ children }: ITodoProvider) => {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleGetTodos = useCallback(async () => {
    if (user) {
      try {
        const { data } = await api.get(`todos/${user.id}`);

        setTodos(data);
      } catch {
        addToast({
          type: 'error',
          title: 'Erro ao obter lista de tarefas.',
          description:
            'Relogue para resolver o problema, caso não funcione, tente novamente mais tarde.',
          secondsDuration: 10,
        });
      }
    }
  }, [addToast, user]);

  return (
    <TodoContext.Provider value={{ todos, handleGetTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodos = (): ITodoContext => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodos depende do TodosProvider');
  }

  return context;
};

export { TodoProvider, useTodos };
