import { useEffect } from 'react';

import * as S from './styles';

import Header from '../../components/Header';
import TodoContainer from '../../components/TodoContainer';

import { useAuth } from '../../hooks/auth';
import { useTodos } from '../../hooks/todos';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { todos, handleGetTodos } = useTodos();

  useEffect(() => {
    handleGetTodos();
  }, [handleGetTodos]);

  console.log(todos);
  return (
    <S.Wrapper>
      <Header userName={user.name} handleSignOut={signOut} />

      <TodoContainer />
    </S.Wrapper>
  );
};

export default Dashboard;
