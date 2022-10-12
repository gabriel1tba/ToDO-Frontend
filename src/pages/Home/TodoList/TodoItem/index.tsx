import { useState, useEffect, useCallback } from 'react';
import { TbTrash, TbEdit } from 'react-icons/tb';

import TodoService from 'services/TodoService';

import { useToast, useToggle } from 'hooks';
import { useTodos } from 'pages/Home';
import { updateTodoAction, deleteTodoAction } from 'pages/Home/utils/actions';

import Alert from 'components/Alert';
import Modal from 'components/Modal';
import CheckBox from 'components/CheckBox';
import EditTodo from '../../Forms/EditTodo';

import * as S from './styles';

import { ITodoItem } from '../../interfaces';

const TodoItem = ({ todo }: ITodoItem) => {
  const [, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  const { addToast } = useToast();
  const { dispatchTodos } = useTodos();

  const [openModal, handleToggleModal] = useToggle();
  const [openAlert, handleToggleAlert] = useToggle();
  const [loadingAlert, toggleLoadingAlert] = useToggle();

  const handleCompletedTodo = async (checked: boolean) => {
    try {
      const { data } = await TodoService.updateTodo({
        id: todo.id,
        title: todo.title,
        completed: checked,
      });

      dispatchTodos(updateTodoAction(data));
    } catch {
      addToast({
        type: 'error',
        title: 'Erro ao fazer alteração.',
        description: 'Um erro ocorreu ao marcar tarefa como completa.',
        secondsDuration: 8,
      });
    }
  };

  const handleDeleteTodoAcdeleteTodoAction = useCallback(async () => {
    toggleLoadingAlert();

    try {
      await TodoService.deleteTodo({
        id: todo.id,
      });

      dispatchTodos(deleteTodoAction(todo.id));

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
  }, [toggleLoadingAlert, todo, dispatchTodos, addToast, handleToggleAlert]);

  return (
    <>
      <S.Wrapper isCompleted={!!todo.completed}>
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
          <button onClick={handleToggleModal} data-testid="edit-todo">
            <TbEdit />
          </button>
          <button onClick={handleToggleAlert} data-testid="delete-todo">
            <TbTrash />
          </button>
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
        onConfirm={handleDeleteTodoAcdeleteTodoAction}
      />
    </>
  );
};

export default TodoItem;
