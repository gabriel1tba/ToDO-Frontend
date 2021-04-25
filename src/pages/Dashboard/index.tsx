import * as S from './styles';

import Header from '../../components/Header';
import TodoContainer from '../../components/TodoContainer';

import { useAuth } from '../../hooks/auth';
import Aside from '../../components/Aside';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <S.Wrapper>
      <Header userName={user.name} handleSignOut={signOut} />

      <div>
        <Aside />
        <TodoContainer />
      </div>
    </S.Wrapper>
  );
};

export default Dashboard;
