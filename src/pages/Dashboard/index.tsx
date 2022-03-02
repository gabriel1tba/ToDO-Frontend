import { useState, useEffect, useCallback } from 'react';

import * as S from './styles';

import { useAuth, useToast, useTodos } from 'hooks';

import TodoService from 'services/TodoService';

import Header from 'components/Header';
import TodoList from 'components/TodoList';
import Loading from 'components/Loading';

import { ActionType } from 'context/todos/actions';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { todoDispatch } = useTodos();
  const { addToast } = useToast();

  console.log(user);

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
    <S.Wrapper>
      <Header userName={user.name} onSignOut={signOut} />

      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <S.Content>
          <TodoList />
        </S.Content>
      )}
    </S.Wrapper>
  );
};

export default Dashboard;
