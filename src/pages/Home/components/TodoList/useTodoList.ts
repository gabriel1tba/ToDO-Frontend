import { useState, useCallback, useMemo } from 'react';

import { TTodo } from 'services/TodoService/interfaces';
import TodoService from 'services/TodoService';

import { useToastContext, useToggle } from 'hooks';

import { useTodosContext } from 'pages/Home';
import { deleteTodoAction } from 'pages/Home/utils/actions';

const useTodoList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openAlert, setOpenAlert] = useState({
    isOpen: false,
    todo: {} as TTodo,
  });
  const [editTodoModal, setEditTodoModal] = useState({
    isOpen: false,
    todo: {} as TTodo,
  });

  const [openCreateTodoModal, handleToggleCreateTodoModal] = useToggle();
  const [alertLoading, handleToggleAlertLoading] = useToggle();
  const { todos, dispatchTodos } = useTodosContext();
  const { addToast } = useToastContext();

  const filteredTodos = useMemo(
    () =>
      todos
        .filter((todo) =>
          todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a: TTodo, b: TTodo) => a.created_at.localeCompare(b.created_at)),
    [todos, searchTerm]
  );

  const quantities = useMemo(
    () =>
      todos.reduce(
        (acc, todo) => {
          if (todo.completed) {
            acc.completeds += Number(todo.completed);
            acc.total += Number(todo.completed);
          } else if (!todo.completed) {
            acc.total += Number(!todo.completed);
          }

          return acc;
        },
        {
          completeds: 0,
          total: 0,
        }
      ),
    [todos]
  );

  const handleCloseEditTodoModal = useCallback(() => {
    setEditTodoModal((prevState) => ({
      isOpen: !prevState.isOpen,
      todo: {} as TTodo,
    }));
  }, []);

  const handleOpenEditTodoModal = useCallback((todo: TTodo) => {
    setEditTodoModal((prevState) => ({
      isOpen: !prevState.isOpen,
      todo,
    }));
  }, []);

  const handleCloseAlert = useCallback(() => {
    setOpenAlert((prevState) => ({
      isOpen: !prevState.isOpen,
      todo: {} as TTodo,
    }));
  }, []);

  const handleOpenAlert = useCallback((todo: TTodo) => {
    setOpenAlert((prevState) => ({
      isOpen: !prevState.isOpen,
      todo,
    }));
  }, []);

  const handleDeleteTodo = useCallback(
    async (todo: TTodo) => {
      handleToggleAlertLoading();

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
        handleCloseAlert();
        handleToggleAlertLoading();
      }
    },
    [addToast, dispatchTodos, handleCloseAlert, handleToggleAlertLoading]
  );

  return {
    searchTerm,
    todos,
    filteredTodos,
    quantities,
    openAlert,
    openCreateTodoModal,
    alertLoading,
    editTodoModal,
    setSearchTerm,
    handleToggleCreateTodoModal,
    handleOpenAlert,
    handleCloseAlert,
    handleDeleteTodo,
    handleOpenEditTodoModal,
    handleCloseEditTodoModal,
  };
};

export default useTodoList;
