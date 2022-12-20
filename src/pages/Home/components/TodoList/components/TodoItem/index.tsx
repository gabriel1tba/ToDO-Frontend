import { useState, useEffect, useCallback } from 'react';
import { TbTrash, TbEdit } from 'react-icons/tb';

import TodoService from 'services/TodoService';

import { useToastContext, useToggle } from 'hooks';
import { useTodosContext } from 'pages/Home';
import { updateTodoAction, deleteTodoAction } from 'pages/Home/utils/actions';

import Alert from 'components/Alert';
import Modal from 'components/Modal';
import CheckBox from 'components/CheckBox';
import EditTodo from '../../../Forms/EditTodo';

import * as S from './styles';

import { ITodoItem } from '../../../../interfaces';

const TodoItem = ({ todo }: ITodoItem) => {
  const [openAlert, setOpenAlert] = useState({
    isOpen: false,
    todoTitle: '',
  });

  const [, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  const { addToast } = useToastContext();
  const { dispatchTodos } = useTodosContext();

  const [openModal, handleToggleModal] = useToggle();
  const [loadingAlert, handleToggleLoading] = useToggle();

  const handleCompleteTodo = async (checked: boolean) => {
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

  const handleDeleteTodo = useCallback(async () => {
    handleToggleLoading();

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
      setOpenAlert((prevState) => ({
        isOpen: !prevState.isOpen,
        todoTitle: '',
      }));
      handleToggleLoading();
    }
  }, [addToast, dispatchTodos, todo.id, handleToggleLoading]);

  return (
    <>
      <S.Wrapper isCompleted={!!todo.completed}>
        <CheckBox
          id="completed"
          border="round"
          name="completed"
          checked={todo.completed}
          onChange={(event) => {
            handleCompleteTodo(event.target.checked);
          }}
        />

        <p>{todo.title}</p>

        <div>
          <button onClick={handleToggleModal} data-testid="edit-todo">
            <TbEdit />
          </button>
          <button
            onClick={() =>
              setOpenAlert((prevState) => ({
                isOpen: !prevState.isOpen,
                todoTitle: todo.title,
              }))
            }
            data-testid="delete-todo"
          >
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
        isOpen={openAlert.isOpen}
        isLoading={loadingAlert}
        title={`Excluir tarefa "${openAlert.todoTitle}"?`}
        description="Tem certeza que deseja excluir essa tarefa?"
        confirmLabel="Sim, excluir"
        onCancel={() =>
          setOpenAlert((prevState) => ({
            isOpen: !prevState.isOpen,
            todoTitle: '',
          }))
        }
        onConfirm={handleDeleteTodo}
      />
    </>
  );
};

export default TodoItem;
