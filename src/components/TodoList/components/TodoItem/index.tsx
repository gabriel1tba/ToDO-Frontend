import { useEffect, useState } from 'react';
import { TbTrash, TbEdit } from 'react-icons/tb';

import * as S from './styles';

import { useToast, useTodos, useToggle } from 'hooks';

import TodoService from 'services/TodoService';

import Modal from 'components/Modal';

import EditTodo from '../Forms/EditTodo';

import { ActionType } from 'context/todos/actions';

import { ITodoItem } from 'components/TodoList/interfaces';
import CheckBox from 'components/CheckBox';

const TodoItem = ({ todo }: ITodoItem) => {
  const { addToast } = useToast();
  const { todoDispatch } = useTodos();

  const [openModal, hadleToggleModal] = useToggle();

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

  return (
    <>
      <Modal
        title="Editar tarefa"
        onCloseModal={hadleToggleModal}
        open={openModal}
      >
        <EditTodo todo={todo} onCloseModal={hadleToggleModal} />
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
          <TbEdit onClick={hadleToggleModal} />
          <TbTrash />
        </div>
      </S.Wrapper>
    </>
  );
};

export default TodoItem;
