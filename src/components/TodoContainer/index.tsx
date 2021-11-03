import { useEffect, useMemo } from 'react';
import { FiPlus } from 'react-icons/fi';

import * as S from './styles';

import useTodos from 'hooks/todos';
import useToggle from 'hooks/toggle';
import { useAuth } from 'hooks/auth';

import Badge from '../Badge';
import Modal from '../Modal';
import Todo from './components/Todo';
import NewTodo from './components/Forms/NewTodo';

import { ITodo } from 'context/todos/interfaces';

const TodoContainer = () => {
  const { todos, getTodosFromDB, filteredTodos } = useTodos();
  const { user } = useAuth();

  const [openModal, hadleToggleModal] = useToggle();

  const totals = useMemo(() => {
    const calcResult = filteredTodos.length;

    return calcResult;
  }, [filteredTodos.length]);

  const completeds = useMemo(() => {
    const calcResult = filteredTodos
      .map((todo) => Number(todo.completed), 0)
      .reduce((count, currentPrice) => count + currentPrice, 0);

    return calcResult;
  }, [filteredTodos]);

  const pendings = useMemo(() => {
    const calcResult = filteredTodos
      .map((todo) => Number(!todo.completed), 0)
      .reduce((count, currentPrice) => count + currentPrice, 0);

    return calcResult;
  }, [filteredTodos]);

  useEffect(() => {
    getTodosFromDB();
  }, [getTodosFromDB]);

  return (
    <>
      <Modal
        title="Nova tarefa"
        handleCloseModal={hadleToggleModal}
        openModal={openModal}
      >
        <NewTodo user_id={user.id} handleCloseModal={hadleToggleModal} />
      </Modal>

      <S.Wrapper hastodos={!!todos.length}>
        <div>
          <p>{todos.length ? 'Suas tarefas' : 'Sem tarefas'}</p>
          <div>
            <Badge
              title={`Totais ${totals}`}
              fontColor="#3498db"
              backgroundColor="rgba(52, 152, 219, 0.2)"
            />
            <Badge
              title={`Concluídas ${completeds}`}
              fontColor="#2ecc71"
              backgroundColor="rgba(46, 204, 113, 0.2)"
            />
            <Badge
              title={`Pendentes ${pendings}`}
              fontColor="#e74c3c"
              backgroundColor="rgba(231, 76, 60,0.2)"
            />
          </div>
        </div>
        <S.TodoWrapper hastodos={!!todos.length}>
          {todos.length
            ? filteredTodos
                .sort(
                  (a: ITodo, b: ITodo) =>
                    new Date(a.created_at).getTime() -
                    new Date(b.created_at).getTime(),
                )
                .map((todo) => <Todo key={todo.id} todo={todo} />)
            : null}

          <button onClick={hadleToggleModal}>
            <FiPlus size={25} color="#3498db" />
            {todos.length ? 'Adicionar tarefa' : 'Adicione sua primeira tarefa'}
          </button>
        </S.TodoWrapper>
      </S.Wrapper>
    </>
  );
};

export default TodoContainer;
