import {
  useState,
  useReducer,
  useCallback,
  useMemo,
  createContext,
} from 'react';

import { ITodoContext, ITodoProvider } from './interfaces';

import todoReducer from './reducer';

const TodoContext = createContext({} as ITodoContext);

const TodoProvider = ({ children }: ITodoProvider) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [todos, todoDispatch] = useReducer(todoReducer, []);

  const getSearchTerm = useCallback((word: string) => {
    setSearchTerm(word);
  }, []);

  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [todos, searchTerm],
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        searchTerm,
        getSearchTerm,
        todoDispatch,
        filteredTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
