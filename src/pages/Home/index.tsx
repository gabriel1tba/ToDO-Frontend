import {
  useReducer,
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';

import { useAuth, useToast } from 'hooks';

import TodoService from 'services/TodoService';

import Header from 'components/Header';
import TodoList from './TodoList';
import Loader from 'components/Loader';

import { ActionType } from './utils/actions';
import todoReducer from './utils/reducer';

import { ITodosContext } from './interfaces';

const TodosContext = createContext({} as ITodosContext);

const Home = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, []);

  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();
  const { addToast } = useToast();

  useEffect(() => {
    (async () => {
      if (user) {
        try {
          const { data } = await TodoService.getTodos({ id: user.id });

          dispatchTodos({
            type: ActionType.GetTodos,
            payload: data,
          });
        } catch {
          addToast({
            type: 'error',
            title: 'Erro ao obter dados.',
            description: 'Por favor, tente novamente mais tarde!',
            secondsDuration: 5,
          });
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, [addToast, user]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        dispatchTodos,
      }}
    >
      <Header userName={user.name} />

      {!isLoading && <TodoList />}
      {isLoading && <Loader isLoading={isLoading} size={90} alwaysOnTop />}
    </TodosContext.Provider>
  );
};

export default Home;

export const useTodos = (): ITodosContext => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error('useTodos depends on TodoProvider');
  }

  return context;
};
