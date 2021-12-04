import * as S from './styles';

import Header from 'components/Header';
import TodoList from 'components/TodoList';

import { useAuth } from 'hooks';

const Dashboard = () => {
  const { user, signOut } = useAuth();

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
