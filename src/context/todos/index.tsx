import {
  useState,
  useReducer,
  useCallback,
  useMemo,
  createContext,
} from 'react';

import { useAuth, useToast } from 'hooks';

import api from 'services/api';

import { ActionType } from './actions';

import { ITodo } from 'interfaces';
import { ITodoContext, ITodoProvider } from './interfaces';

import todoReducer from './reducer';

const TodoContext = createContext({} as ITodoContext);

const TodoProvider = ({ children }: ITodoProvider) => {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [searchedWord, setSearchedWord] = useState<string>('');

  const [todos, todoDispatch] = useReducer(todoReducer, []);

  const getTodosFromDB = useCallback(async () => {
    if (user) {
      try {
        const { data } = await api.get<ITodo[]>(`todos/${user.id}`);

        todoDispatch({
          type: ActionType.GetTodos,
          payload: data,
        });
      } catch {
        addToast({
          type: 'error',
          title: 'Erro inesperado do servidor.',
          secondsDuration: 5,
        });
      }
    }
  }, [addToast, user]);

  const getSearchedWord = useCallback((word: string) => {
    setSearchedWord(word);
  }, []);

  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchedWord.toLowerCase()),
      ),
    [todos, searchedWord],
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        getTodosFromDB,
        getSearchedWord,
        todoDispatch,
        filteredTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
