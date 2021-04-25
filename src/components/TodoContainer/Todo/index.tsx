import { useCallback } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useToast } from '../../../hooks/toast';
import { useTodos } from '../../../hooks/todos';
import api from '../../../services/api';

import * as S from './styles';

type Todo = {
  id: string;
  user_id: string;
  completed: boolean;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
};

interface ITodo {
  todo: Todo;
}

const Todo = ({ todo }: ITodo) => {
  const { addToast } = useToast();
  const { handleGetTodos } = useTodos();

  const handleCompletedTodo = useCallback(
    (checked: boolean) => {
      todo.completed = checked;

      try {
        api.patch('/todos', {
          ...todo,
        });
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro ao fazer alteração.',
          description:
            'Um erro ocorreu ao marcar tarefa como completa. Tente novamente mais tarde.',
          secondsDuration: 5,
        });
      }

      handleGetTodos();
    },
    [addToast, handleGetTodos, todo],
  );

  return (
    <S.Wrapper>
      <input
        defaultChecked={todo.completed}
        type="checkbox"
        name="completed"
        id="completed"
        onChange={(event) => handleCompletedTodo(event.target.checked)}
      />

      <a onClick={() => alert(todo.title)}>{todo.title}</a>

      <div>
        <FaEdit size={20} color="#2ecc71" />
        <FaTrashAlt size={20} color="#e74c3c" />
      </div>
    </S.Wrapper>
  );
};

export default Todo;
