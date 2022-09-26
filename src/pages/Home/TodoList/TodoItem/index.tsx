import { useState, useEffect, useCallback } from 'react';
import { TbTrash, TbEdit } from 'react-icons/tb';

import TodoService from 'services/TodoService';

import { useToast, useToggle } from 'hooks';
import { useHome } from 'pages/Home';
import { ActionType } from 'pages/Home/utils/actions';

import Alert from 'components/Alert';
import Modal from 'components/Modal';
import CheckBox from 'components/CheckBox';
import EditTodo from '../../Forms/EditTodo';

import * as S from './styles';

import { ITodoItem } from '../../interfaces';

const TodoItem = ({ todo }: ITodoItem) => {
  const { addToast } = useToast();
  const { todoDispatch } = useHome();

  const [openModal, handleToggleModal] = useToggle();
  const [openAlert, handleToggleAlert] = useToggle();
  const [loadingAlert, toggleLoadingAlert] = useToggle();

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

  const handleDeleteTodo = useCallback(async () => {
    toggleLoadingAlert();

    try {
      await TodoService.deleteTodo({
        id: todo.id,
      });

      todoDispatch({ type: ActionType.DeleteTodo, payload: todo });

      addToast({
        type: 'success',
        title: 'Tarefa foi removida com sucesso.',
        secondsDuration: 8,
      });
    } catch {
      addToast({
        type: 'error',
        title: 'Erro ao remover tarefa!',
        secondsDuration: 8,
      });
    } finally {
      handleToggleAlert();
      toggleLoadingAlert();
    }
  }, [toggleLoadingAlert, todo, todoDispatch, addToast, handleToggleAlert]);

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
        isLoading={loadingAlert}
        title="Excluir tarefa"
        description="Tem certeza que deseja excluir essa tarefa?"
        onClose={handleToggleAlert}
        onConfirm={handleDeleteTodo}
      />
    </>
  );
};

export default TodoItem;
