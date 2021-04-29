import {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from 'react';

import { useToast } from './toast';
import { useAuth } from './auth';

import api from 'services/api';

import findInObj from 'utils/findInObj';

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
  getTodosFromDB: () => void;
  createTodo: (seletectedTodo: ITodo) => void;
  updateTodo: (seletectedTodo: ITodo) => void;
  deleteTodo: (seletectedTodo: ITodo) => void;
  filteredTodos: (value: string) => ITodo[];
  getSearchedWord: (word: string) => void;
  searchedWord: string;
}

interface ITodoProvider {
  children: ReactNode;
}

const TodoContext = createContext({} as ITodoContext);

const TodoProvider = ({ children }: ITodoProvider) => {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>('');

  const getTodosFromDB = useCallback(async () => {
    if (user) {
      try {
        const { data } = await api.get(`todos/${user.id}`);

        setTodos(
          data.sort(
            (a: ITodo, b: ITodo) =>
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime(),
          ),
        );
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

  const createTodo = useCallback((seletectedTodo: ITodo) => {
    try {
      setTodos((prevState) => [...prevState, seletectedTodo]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateTodo = useCallback(
    (seletectedTodo: ITodo) => {
      try {
        setTodos(
          todos
            .sort(
              (a: ITodo, b: ITodo) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime(),
            )
            .map((todo) => {
              if (seletectedTodo.id === todo.id) {
                todo = seletectedTodo;
              }
              return todo;
            }),
        );
      } catch (error) {
        console.log(error);
      }
    },
    [todos],
  );

  const deleteTodo = useCallback(
    (seletectedTodo: ITodo) => {
      try {
        setTodos(
          todos
            .filter((todo) => {
              return todo !== seletectedTodo;
            })
            .sort(
              (a: ITodo, b: ITodo) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime(),
            ),
        );
      } catch (error) {
        console.log(error);
      }
    },
    [todos],
  );

  const filteredTodos = useCallback(
    (value: string): ITodo[] => {
      const filteredArray: ITodo[] = [];

      todos.forEach((object: ITodo) => {
        if (findInObj(object, value)) {
          filteredArray.push(object);
        }
      });
      return filteredArray;
    },
    [todos],
  );

  const getSearchedWord = useCallback((word: string) => {
    setSearchedWord(word);
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        getTodosFromDB,
        createTodo,
        updateTodo,
        deleteTodo,
        filteredTodos,
        getSearchedWord,
        searchedWord,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodos = (): ITodoContext => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodos depende do TodoProvider');
  }

  return context;
};

export { TodoProvider, useTodos };
