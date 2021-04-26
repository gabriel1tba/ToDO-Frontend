import { useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import { useTodos } from '../../hooks/todos';

import * as S from './styles';

import Todo from './components/Todo';

const TodoContainer = () => {
  const { todos, handleGetTodos } = useTodos();

  useEffect(() => {
    handleGetTodos();
  }, [handleGetTodos]);

  return (
    <S.Wrapper>
      <p>{todos.length ? 'Suas tarefas' : 'Sem tarefas'}</p>
      <S.TodoWrapper hastodos={!!todos.length}>
        {todos.length
          ? todos
              .sort(
                (a, b) =>
                  new Date(a.created_at).getTime() -
                  new Date(b.created_at).getTime(),
              )
              .map((todo) => <Todo key={todo.id} todo={todo} />)
          : null}

        <button>
          <FiPlus size={25} color="#3498db" />
          {todos.length ? 'Adicionar tarefa' : 'Adicione sua primeira tarefa'}
        </button>
      </S.TodoWrapper>
    </S.Wrapper>
  );
};

export default TodoContainer;
