import { useReducer, createContext } from 'react';

import { ITodoContext, ITodoProvider } from './interfaces';

import todoReducer from './reducer';

const TodoContext = createContext({} as ITodoContext);

const TodoProvider = ({ children }: ITodoProvider) => {
  const [todos, todoDispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        todoDispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
