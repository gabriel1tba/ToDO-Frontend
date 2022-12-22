import { useState, useEffect } from 'react';
import { TbTrash, TbEdit } from 'react-icons/tb';

import TodoService from 'services/TodoService';

import { useToastContext } from 'hooks';
import { useTodosContext } from 'pages/Home';
import { updateTodoAction } from 'pages/Home/utils/actions';

import CheckBox from 'components/CheckBox';

import * as S from './styles';

import { ITodoItem } from '../../interfaces';

const TodoItem = ({ todo, onEditTodoModal, onOpenAlert }: ITodoItem) => {
  const [, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);

    return () => setDidMount(false);
  }, []);

  const { addToast } = useToastContext();
  const { dispatchTodos } = useTodosContext();

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

  return (
    <S.Wrapper isCompleted={!!todo.completed}>
      <button
        onClick={() => {
          handleCompleteTodo(!todo.completed);
        }}
      >
        <CheckBox
          id="completed"
          border="round"
          name="completed"
          checked={todo.completed}
          onChange={() => null}
        />

        <p>{todo.title}</p>
      </button>

      <div>
        <button onClick={() => onEditTodoModal?.(todo)} data-testid="edit-todo">
          <TbEdit />
        </button>
        <button onClick={() => onOpenAlert?.(todo)} data-testid="delete-todo">
          <TbTrash />
        </button>
      </div>
    </S.Wrapper>
  );
};

export default TodoItem;
