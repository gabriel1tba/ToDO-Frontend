import { useState, useEffect, useCallback } from 'react';
import { FiPlus } from 'react-icons/fi';

import * as S from './styles';

import useTodos from 'hooks/todos';
import { useAuth } from 'hooks/auth';

import Badge from '../Badge';
import Modal from '../Modal';
import Todo from './components/Todo';
import NewTodo from './components/Forms/NewTodo';

import { ITodo } from 'context/todos/interfaces';

const TodoContainer = () => {
  const { todos, getTodosFromDB, filteredTodos } = useTodos();
  const { user } = useAuth();

  const [totals, setTotals] = useState(0);
  const [completeds, setCompleteds] = useState(0);
  const [pendings, setPendings] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  useEffect(() => {
    setTotals(filteredTodos.length);

    setCompleteds(
      filteredTodos
        .map((todo) => Number(todo.completed), 0)
        .reduce((count, currentPrice) => count + currentPrice, 0),
    );

    setPendings(
      filteredTodos
        .map((todo) => Number(!todo.completed), 0)
        .reduce((count, currentPrice) => count + currentPrice, 0),
    );
  }, [filteredTodos]);

  useEffect(() => {
    getTodosFromDB();
  }, [getTodosFromDB]);

  return (
    <>
      {openModal && (
        <Modal title="Nova tarefa" handleCloseModal={handleCloseModal}>
          <NewTodo user_id={user.id} handleCloseModal={handleCloseModal} />
        </Modal>
      )}

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

          <button onClick={() => setOpenModal(true)}>
            <FiPlus size={25} color="#3498db" />
            {todos.length ? 'Adicionar tarefa' : 'Adicione sua primeira tarefa'}
          </button>
        </S.TodoWrapper>
      </S.Wrapper>
    </>
  );
};

export default TodoContainer;
