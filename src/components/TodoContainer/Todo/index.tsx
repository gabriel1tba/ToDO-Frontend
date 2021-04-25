import { useState, useCallback } from 'react';
import { FaEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';

import * as S from './styles';

import { useToast } from '../../../hooks/toast';
import { useTodos } from '../../../hooks/todos';

import api from '../../../services/api';

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
  const { handleUpdateTodos } = useTodos();

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleCompletedTodo = useCallback(
    async (checked: boolean) => {
      try {
        todo.completed = checked;

        await api.patch('/todos', {
          ...todo,
        });
      } catch {
        todo.completed = !checked;

        addToast({
          type: 'error',
          title: 'Erro ao fazer alteração.',
          description:
            'Um erro ocorreu ao marcar tarefa como completa. Tente novamente mais tarde.',
          secondsDuration: 8,
        });
      }
      handleUpdateTodos(todo);
    },
    [addToast, handleUpdateTodos, todo],
  );

  return (
    <S.Wrapper>
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={todo.completed}
        onChange={(event) => {
          handleCompletedTodo(event.target.checked);
        }}
      />

      <a
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => alert(todo.title)}
      >
        {todo.title}
      </a>

      <div>
        <FaEdit
          onClick={() => {
            setOpenModal(true);
          }}
          size={20}
          color="#2ecc71"
        />
        <BsTrash size={20} color="#e74c3c" />
      </div>
    </S.Wrapper>
  );
};

export default Todo;
