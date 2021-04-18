import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

const Dashboard = () => {
  const { user } = useAuth();

  const [todos, setTodos] = useState([]);

  const getTodoList = useCallback(async () => {
    const { data } = await api.get(`todos/${user.id}`);

    setTodos(data);
  }, [user.id]);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return (
    <ul>
      {todos.map((todo: { title: string; description: string }) => (
        <>
          <li>
            <strong>Título</strong>
            <p>{todo.title}</p>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Descrição</strong>
            <p>{todo.description}</p>
          </li>
        </>
      ))}
    </ul>
  );
};

export default Dashboard;
