import * as S from './styles';

import Header from 'components/Header';
import TodoList from 'components/TodoList';

import { useAuth } from 'hooks';

import { TodoProvider } from 'context/todos';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <TodoProvider>
      <S.Wrapper>
        <Header userName={user.name} onSignOut={signOut} />

        <S.Content>
          <TodoList />
        </S.Content>
      </S.Wrapper>
    </TodoProvider>
  );
};

export default Dashboard;
