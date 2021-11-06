import * as S from './styles';

import Header from 'components/Header';
import TodoContainer from 'components/TodoContainer';

import { useAuth } from 'hooks';

import { TodoProvider } from 'context/todos';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <TodoProvider>
      <S.Wrapper>
        <Header userName={user.name} handleSignOut={signOut} />

        <div>
          <TodoContainer />
        </div>
      </S.Wrapper>
    </TodoProvider>
  );
};

export default Dashboard;
