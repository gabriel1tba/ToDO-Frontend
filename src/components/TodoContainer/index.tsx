import { useEffect } from 'react';

import { useTodos } from '../../hooks/todos';

import { BiListPlus } from 'react-icons/bi';
import * as S from './styles';

import Todo from './components/Todo';

const TodoContainer = () => {
  const { todos, handleGetTodos } = useTodos();

  useEffect(() => {
    handleGetTodos();
  }, [handleGetTodos]);

  return (
    <S.Wrapper>
      <S.TodoWrapper>
        {todos.length > 0
          ? todos
              .sort(
                (a, b) =>
                  new Date(a.created_at).getTime() -
                  new Date(b.created_at).getTime(),
              )
              .map((todo) => <Todo key={todo.id} todo={todo} />)
          : null}
      </S.TodoWrapper>
      <button>
        <BiListPlus size={25} color="#fff" /> Nova tarefa
      </button>
    </S.Wrapper>
  );
};

export default TodoContainer;
