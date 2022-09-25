import { useState, useEffect, useCallback } from 'react';

import { useAuth, useToast, useTodos } from 'hooks';

import TodoService from 'services/TodoService';

import Header from 'components/Header';
import TodoList from 'components/TodoList';
import Loader from 'components/Loader';

import { ActionType } from 'context/todos/actions';

const Home = () => {
  const { user, signOut } = useAuth();
  const { todoDispatch } = useTodos();
  const { addToast } = useToast();

  const [isLoading, setIsLoading] = useState(true);

  const getTodosFromApi = useCallback(async () => {
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
  }, [addToast, todoDispatch, user]);

  useEffect(() => {
    getTodosFromApi();
  }, [getTodosFromApi]);

  return (
    <>
      <Header userName={user.name} onSignOut={signOut} />

      {isLoading ? <Loader isLoading={isLoading} size={90} /> : <TodoList />}
    </>
  );
};

export default Home;
