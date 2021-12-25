import { useEffect, useCallback } from 'react';

import * as S from './styles';

import { useAuth, useToast, useTodos } from 'hooks';

import Header from 'components/Header';
import TodoList from 'components/TodoList';

import api from 'services/api';

import { ITodo } from 'interfaces';

import { ActionType } from 'context/todos/actions';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { todoDispatch } = useTodos();
  const { addToast } = useToast();

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
  }, [addToast, todoDispatch, user]);

  useEffect(() => {
    getTodosFromDB();
  }, [getTodosFromDB]);

  return (
    <S.Wrapper>
      <Header userName={user.name} onSignOut={signOut} />

      <S.Content>
        <TodoList />
      </S.Content>
    </S.Wrapper>
  );
};

export default Dashboard;
