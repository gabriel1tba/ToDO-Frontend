import { useMemo } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useTodos, useToggle } from 'hooks';

import Badge from '../Badge';
import Modal from '../Modal';
import TodoItem from './components/TodoItem';
import NewTodo from './components/Forms/NewTodo';

import magnifierQuestion from 'assets/icons/magnifier-question.svg';

import { ITodo } from 'interfaces';

const TodoList = () => {
  const { todos, filteredTodos, searchTerm } = useTodos();
  const theme = useTheme();

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

  return (
    <S.Wrapper>
      <Modal
        title="Nova tarefa"
        onCloseModal={hadleToggleModal}
        open={openModal}
      >
        <NewTodo onCloseModal={hadleToggleModal} />
      </Modal>

      <S.TodoWrapper hastodos={!!filteredTodos.length}>
        <div id="header">
          <p>{todos.length ? 'Suas tarefas' : 'Sem tarefas'}</p>
          <div id="badges">
            <Badge
              title={`Totais ${totals}`}
              fontColor={theme.colors.primary.main}
              backgroundColor={theme.colors.primary.lighter}
            />
            <Badge
              title={`Concluídas ${completeds}`}
              fontColor={theme.colors.success.main}
              backgroundColor={theme.colors.success.lighter}
            />
            <Badge
              title={`Pendentes ${pendings}`}
              fontColor={theme.colors.danger.main}
              backgroundColor={theme.colors.danger.lighter}
            />
          </div>
        </div>
        <S.TodosList hastodos={!!filteredTodos.length}>
          {!!filteredTodos.length &&
            filteredTodos
              .sort((a: ITodo, b: ITodo) =>
                a.created_at.localeCompare(b.created_at),
              )
              .map((todo) => <TodoItem key={todo.id} todo={todo} />)}

          {filteredTodos.length < 1 && searchTerm.length > 0 ? null : (
            <button onClick={hadleToggleModal}>
              <FiPlus size={25} />
              {todos.length
                ? 'Adicionar tarefa'
                : 'Adicione sua primeira tarefa'}
            </button>
          )}
        </S.TodosList>
      </S.TodoWrapper>

      {filteredTodos.length < 1 && searchTerm.length > 0 && (
        <S.SearchNotFoundContainer>
          <img src={magnifierQuestion} alt="Lente de aumento de cor vermelha" />

          <span>
            Nenhum resultado foi encontrado para <strong>”{searchTerm}”</strong>
            .
          </span>
        </S.SearchNotFoundContainer>
      )}
    </S.Wrapper>
  );
};

export default TodoList;
