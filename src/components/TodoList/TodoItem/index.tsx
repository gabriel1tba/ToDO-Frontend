import { useEffect, useState } from 'react';
import { TbTrash, TbEdit } from 'react-icons/tb';

import * as S from './styles';

import { useToast, useTodos, useToggle } from 'hooks';
import { ActionType } from 'context/todos/actions';

import TodoService from 'services/TodoService';

import Alert from 'components/Alert';
import Modal from 'components/Modal';
import CheckBox from 'components/CheckBox';

import { ITodoItem } from 'components/TodoList/interfaces';

import EditTodo from '../Forms/EditTodo';

const TodoItem = ({ todo }: ITodoItem) => {
  const { addToast } = useToast();
  const { todoDispatch } = useTodos();

  const [openModal, handleToggleModal] = useToggle();
  const [openAlert, handleToggleAlert] = useToggle();

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
          <TbEdit onClick={handleToggleModal} />
          <TbTrash onClick={handleToggleAlert} />
        </div>
      </S.Wrapper>

      <Modal
        title="Editar tarefa"
        onCloseModal={handleToggleModal}
        open={openModal}
      >
        <EditTodo todo={todo} onCloseModal={handleToggleModal} />
      </Modal>

      <Alert
        isOpen={openAlert}
        title="Excluir tarefa"
        description="Tem certeza que deseja excluir essa tarefa?"
        onClose={handleToggleAlert}
        onConfirm={handleToggleAlert}
      />
    </>
  );
};

export default TodoItem;
