import { useEffect, useState } from 'react';
import { TbTrash, TbEdit } from 'react-icons/tb';

import * as S from './styles';

import { useToast, useTodos, useToggle } from 'hooks';

import TodoService from 'services/TodoService';

import Modal from 'components/Modal';

import ManageTodo from '../Forms/ManageTodo';

import { ActionType } from 'context/todos/actions';

import { ITodoItem } from 'components/TodoList/interfaces';
import CheckBox from 'components/CheckBox';

const TodoItem = ({ todo }: ITodoItem) => {
  const { addToast } = useToast();
  const { todoDispatch } = useTodos();

  const [openModal, hadleToggleModal] = useToggle();

  const [showTodo, setShowTodo] = useState(false);
  const [editTodo, setEditTodo] = useState(false);

  const [, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  const handleCompletedTodo = async (checked: boolean) => {
    try {
      const { data } = await TodoService.updateTodo({
        id: todo.id,
        title: todo.title,
        completed: checked,
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

  const setModalTitle = () => {
    return showTodo
      ? 'Detalhes da tarefa'
      : editTodo
      ? 'Editar tarefa'
      : 'Excluir tarefa';
  };

  return (
    <>
      <Modal
        title={setModalTitle()}
        onCloseModal={hadleToggleModal}
        open={openModal}
      >
        <ManageTodo
          todo={todo}
          editTodo={editTodo}
          showTodo={showTodo}
          onCloseModal={hadleToggleModal}
        />
      </Modal>

      <S.Wrapper isCompleted={todo.completed}>
        <CheckBox
          id="completed"
          border="round"
          name="completed"
          checked={todo.completed}
          onChange={(event) => {
            handleCompletedTodo(event.target.checked);
          }}
        />

        <p>{todo.title}</p>

        <div>
          <TbEdit onClick={handleEditTodo} />
          <TbTrash onClick={handleDeleteTodo} />
        </div>
      </S.Wrapper>
    </>
  );
};

export default TodoItem;
