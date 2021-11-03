import { createContext, useCallback, useState, useReducer } from 'react';

import useToast from 'hooks/toast';
import useAuth from 'hooks/auth';

import api from 'services/api';

import { ActionType } from './actions';

import { ITodoContext, ITodoProvider, ITodo } from './interfaces';

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
          title: 'Erro ao obter lista de tarefas.',
          description:
            'Relogue para resolver o problema, caso não funcione, tente novamente mais tarde.',
          secondsDuration: 10,
        });
      }
    }
  }, [addToast, user]);

  const getSearchedWord = useCallback((word: string) => {
    setSearchedWord(word);
  }, []);

  const findInObj = useCallback(
    (objectToFilter: ITodo, wordToFilter: string): boolean => {
      return Object.values(objectToFilter).some((object) =>
        typeof object === 'object'
          ? findInObj(object, wordToFilter)
          : typeof object === 'string'
          ? object.toLowerCase().includes(wordToFilter.toLowerCase()) &&
            object === objectToFilter['title']
          : typeof object === 'number'
          ? String(object).includes(wordToFilter) || isNaN(object)
          : object === wordToFilter && object === objectToFilter['title'],
      );
    },
    [],
  );

  const filterTodos = useCallback(
    (value: string): ITodo[] => {
      const todosFound: ITodo[] = [];

      todos.forEach((object: ITodo) => {
        if (findInObj(object, value)) {
          todosFound.push(object);
        }
      });
      return todosFound;
    },
    [findInObj, todos],
  );

  const filteredTodos = filterTodos(searchedWord);

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
