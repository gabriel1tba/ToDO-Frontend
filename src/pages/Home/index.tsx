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

import { IHomeContext } from './interfaces';

const HomeContext = createContext({} as IHomeContext);

const Home = () => {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [todos, todoDispatch] = useReducer(todoReducer, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (user) {
        try {
          const { data } = await TodoService.getTodos({ id: user.id });

          todoDispatch({
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
    <HomeContext.Provider
      value={{
        todos,
        todoDispatch,
      }}
    >
      <Header userName={user.name} />

      {!isLoading && <TodoList />}
      {isLoading && <Loader isLoading={isLoading} size={90} alwaysOnTop />}
    </HomeContext.Provider>
  );
};

export default Home;

export const useHome = (): IHomeContext => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHome depende do Home');
  }

  return context;
};
