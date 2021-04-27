import { useState, useCallback } from 'react';
import { FaEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';

import * as S from './styles';

import { useToast } from '../../../../hooks/toast';
import { useTodos } from '../../../../hooks/todos';

import Modal from '../../../Modal';

import api from '../../../../services/api';
import EditOrDelete from '../Forms/EditOrDelete';

import { Item } from '../../interfaces';

interface ITodo {
  todo: Item;
}

const Todo = ({ todo }: ITodo) => {
  const { addToast } = useToast();
  const { updateTodos } = useTodos();

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleCompletedTodo = useCallback(
    async (checked: boolean) => {
      try {
        const { data } = await api.patch('/todos', {
          id: todo.id,

          completed: checked,
          title: todo.title,
          description: todo.description,
        });

        updateTodos(data);
      } catch {
        addToast({
          type: 'error',
          title: 'Erro ao fazer alteração.',
          description: 'Um erro ocorreu ao marcar tarefa como completa.',
          secondsDuration: 8,
        });
      }
    },
    [addToast, updateTodos, todo],
  );

  return (
    <>
      {openModal && (
        <Modal title="Editar" handleCloseModal={handleCloseModal}>
          <EditOrDelete todo={todo} handleCloseModal={handleCloseModal} />
        </Modal>
      )}

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
    </>
  );
};

export default Todo;
