import { useState, useEffect, useCallback } from 'react';
import { FiPlus } from 'react-icons/fi';

import * as S from './styles';

import { useTodos } from '../../hooks/todos';
import { useAuth } from '../../hooks/auth';

import Todo from './components/Todo';
import Badge from '../Badge';
import Modal from '../Modal';
import NewTodo from './components/Forms/NewTodo';

const TodoContainer = () => {
  const { todos, getTodosFromDB } = useTodos();
  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  useEffect(() => {
    getTodosFromDB();
  }, [getTodosFromDB]);

  return (
    <>
      {openModal && (
        <Modal title="Modal de criação" handleCloseModal={handleCloseModal}>
          <NewTodo user_id={user.id} handleCloseModal={handleCloseModal} />
        </Modal>
      )}
      <S.Wrapper>
        <div>
          <p>{todos.length ? 'Suas tarefas' : 'Sem tarefas'}</p>
          <div>
            <Badge
              title="Totais"
              dynamicAmount={todos.length ?? 0}
              fontColor="#3498db"
              rgbaBackground="rgba(52, 152, 219, 0.2)"
            />
            <Badge
              title="Concluídas"
              dynamicAmount={todos
                .map((todo) => Number(todo.completed), 0)
                .reduce((count, currentPrice) => count + currentPrice, 0)}
              fontColor="#2ecc71"
              rgbaBackground="rgba(46, 204, 113, 0.2)"
            />
            <Badge
              title="Pendentes"
              dynamicAmount={todos
                .map((todo) => Number(!todo.completed), 0)
                .reduce((count, currentPrice) => count + currentPrice, 0)}
              fontColor="#e74c3c"
              rgbaBackground="rgba(231, 76, 60,0.2)"
            />
          </div>
        </div>
        <S.TodoWrapper hastodos={!!todos.length}>
          {todos.length
            ? todos.map((todo) => <Todo key={todo.id} todo={todo} />)
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
