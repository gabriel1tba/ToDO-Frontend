import { useEffect } from 'react';

import { useTodos } from '../../hooks/todos';

import { BiListPlus } from 'react-icons/bi';
import * as S from './styles';

import Todo from './Todo';

const TodoContainer = () => {
  const { todos, handleGetTodos } = useTodos();

  useEffect(() => {
    handleGetTodos();
  }, [handleGetTodos]);

  return (
    <S.Wrapper>
      <S.Header>
        <span
          style={{
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            color: '#3498db',
          }}
        >
          Total {todos.length ?? 0}
        </span>
        <span
          style={{
            backgroundColor: 'rgba(46, 204, 113, 0.2)',
            color: '#2ecc71',
          }}
        >
          Concluídos{' '}
          {todos
            .map((todo) => Number(todo.completed), 0)
            .reduce((count, currentPrice) => count + currentPrice, 0)}
        </span>
        <span
          style={{ backgroundColor: 'rgba(231, 76, 60,0.2)', color: '#e74c3c' }}
        >
          Pendentes{' '}
          {todos.length -
            todos
              .map((todo) => Number(todo.completed), 0)
              .reduce((count, currentPrice) => count + currentPrice, 0) ?? 0}
        </span>
      </S.Header>

      <S.InputSearch placeholder="Pesquise uma tarefa..." />

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
        <BiListPlus size={30} color="#fff" /> Nova tarefa
      </button>
    </S.Wrapper>
  );
};

export default TodoContainer;
