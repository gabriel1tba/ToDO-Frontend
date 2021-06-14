import { useState, useEffect, useCallback } from 'react';
import { FaEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';

import * as S from './styles';

import { useToast } from 'hooks/toast';
import useTodos from 'hooks/todos';

import Modal from 'components/Modal';

import api from 'services/api';
import ManageTodo from '../Forms/ManageTodo';

import { Item } from '../../interfaces';

import { ActionType } from 'hooks/todos/actions';

interface ITodo {
  todo: Item;
}

const Todo = ({ todo }: ITodo) => {
  const { addToast } = useToast();
  const { todoDispatch } = useTodos();

  const [openModal, setOpenModal] = useState(false);

  const [showTodo, setShowTodo] = useState(false);
  const [editTodo, setEditTodo] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  // State to useEffect cleanup function
  const [, setDidMount] = useState(false);

  // useEffect cleanup function
  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
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

        todoDispatch({ type: ActionType.UpdateTodo, payload: data });
      } catch {
        addToast({
          type: 'error',
          title: 'Erro ao fazer alteração.',
          description: 'Um erro ocorreu ao marcar tarefa como completa.',
          secondsDuration: 8,
        });
      }
    },
    [todo.id, todo.title, todo.description, todoDispatch, addToast],
  );

  return (
    <>
      {openModal && (
        <Modal
          title={
            showTodo
              ? 'Detalhes da tarefa'
              : editTodo
              ? 'Editar tarefa'
              : 'Excluir tarefa'
          }
          handleCloseModal={handleCloseModal}
        >
          <ManageTodo
            todo={todo}
            editTodo={editTodo}
            showTodo={showTodo}
            handleCloseModal={handleCloseModal}
          />
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
          onClick={() => {
            setShowTodo(true);
            setEditTodo(false);
            setOpenModal(true);
          }}
        >
          {todo.title}
        </a>

        <div>
          <FaEdit
            onClick={() => {
              setShowTodo(false);
              setEditTodo(true);
              setOpenModal(true);
            }}
            size={20}
            color="#ffc107"
          />
          <BsTrash
            onClick={() => {
              setShowTodo(false);
              setEditTodo(false);
              setOpenModal(true);
            }}
            size={20}
            color="#dc3545"
          />
        </div>
      </S.Wrapper>
    </>
  );
};

export default Todo;
