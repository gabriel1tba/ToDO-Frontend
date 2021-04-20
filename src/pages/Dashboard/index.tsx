import { useEffect } from 'react';

import Header from '../../components/Header';

import { useAuth } from '../../hooks/auth';
import { useTodos } from '../../hooks/todos';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { todos, handleGetTodos } = useTodos();

  useEffect(() => {
    handleGetTodos();
  }, [handleGetTodos]);

  console.log(todos);
  return <Header userName={user.name} handleSignOut={signOut} />;
};

export default Dashboard;
