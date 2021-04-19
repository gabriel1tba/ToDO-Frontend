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
    <>
      {todos.length > 1 ? (
        todos.map(
          (todo: { title: string; description: string; id: string }) => (
            <ul key={todo.id}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Título</strong>
                <p>{todo.title}</p>
                <strong>Descrição</strong>
                <p>{todo.description}</p>
              </li>
            </ul>
          ),
        )
      ) : (
        <li>
          <p>Sem tarefas</p>
        </li>
      )}
    </>
  );
};

export default Dashboard;
