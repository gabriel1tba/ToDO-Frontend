import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import Header from '../../components/Header';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  const history = useHistory();

  const [todos, setTodos] = useState([]);

  const handleSignOut = useCallback(() => {
    signOut();
    history.push('/');
  }, [history, signOut]);

  const getTodoList = useCallback(async () => {
    const { data } = await api.get(`todos/${user.id}`);

    setTodos(data);
  }, [user.id]);

  return <Header />;
};

export default Dashboard;
