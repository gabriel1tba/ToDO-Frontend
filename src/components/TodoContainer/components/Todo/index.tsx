import { useEffect, useState,  } from 'react';
import { FaEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';

import * as S from './styles';

import useTodos from 'hooks/todos';
import useToggle from 'hooks/toggle';
import useToast from 'hooks/toast';

import Modal from 'components/Modal';

import api from 'services/api';
import ManageTodo from '../Forms/ManageTodo';

import { Item } from '../../interfaces';

import { ActionType } from 'context/todos/actions';

interface ITodo {
  todo: Item;
}

const Todo = ({ todo }: ITodo) => {
  const { addToast } = useToast();
  const { todoDispatch } = useTodos();

  const [openModal, hadleToggleModal] = useToggle();

  const [showTodo, setShowTodo] = useState(false);
  const [editTodo, setEditTodo] = useState(false);

  // State to useEffect cleanup function
  const [, setDidMount] = useState(false);

  // useEffect cleanup function
  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  const handleCompletedTodo = async (checked: boolean) => {
    try {
      const { data } = await api.patch('/todos', {
        id: todo.id,

        completed: checked,
        title: todo.title,
        description: todo.description,
      });

      todoDispatch({ type: ActionType.UpdateTodo, payload: data });
    } catch {
      addToast({
        type: 'error',
        title: 'Erro ao fazer alteração.',
        description: 'Um erro ocorreu ao marcar tarefa como completa.',
        secondsDuration: 8,
      });
    }
  };

  const handleViewTodo = () => {
    setShowTodo(true);
    setEditTodo(false);
    hadleToggleModal();
  };

  const handleEditTodo = () => {
    setShowTodo(false);
    setEditTodo(true);
    hadleToggleModal();
  };

  const handleDeleteTodo = () => {
    setShowTodo(false);
    setEditTodo(false);
    hadleToggleModal();
  };

  return (
    <>
      <Modal
        title={
          showTodo
            ? 'Detalhes da tarefa'
            : editTodo
            ? 'Editar tarefa'
            : 'Excluir tarefa'
        }
        openModal={openModal}
        handleCloseModal={hadleToggleModal}
      >
        <ManageTodo
          todo={todo}
          editTodo={editTodo}
          showTodo={showTodo}
          handleCloseModal={hadleToggleModal}
        />
      </Modal>

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
          onClick={handleViewTodo}
        >
          {todo.title}
        </a>

        <div>
          <FaEdit onClick={handleEditTodo} size={20} color="#ffc107" />
          <BsTrash onClick={handleDeleteTodo} size={20} color="#dc3545" />
        </div>
      </S.Wrapper>
    </>
  );
};

export default Todo;
