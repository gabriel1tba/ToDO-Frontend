import { useCallback, useState } from 'react';

import Header from '../../components/Header';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

const Dashboard = () => {
  const { user } = useAuth();

  const [todos, setTodos] = useState([]);

  const getTodoList = useCallback(async () => {
    const { data } = await api.get(`todos/${user.id}`);

    setTodos(data);
  }, [user.id]);

  return <Header />;
};

export default Dashboard;
