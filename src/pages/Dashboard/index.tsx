import { useEffect } from 'react';
import api from '../../services/api';

const Dashboard = () => {
  const getTodos = async () => {
    const { data } = await api.get(
      'todos/5a9efaca-cce9-4f57-95e3-66106fbd657b',
    );

    console.log({ data });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return <h1>Olá</h1>;
};

export default Dashboard;
