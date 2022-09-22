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

  const [openModal, handleToggleModal] = useToggle();

  const quantities = useMemo(
    () =>
      filteredTodos.reduce(
        (acc, todo) => {
          if (todo.completed) {
            acc.completeds += Number(todo.completed);
            acc.total += Number(todo.completed);
          } else if (!todo.completed) {
            acc.pendings += Number(!todo.completed);
            acc.total += Number(!todo.completed);
          }

          return acc;
        },
        {
          completeds: 0,
          pendings: 0,
          total: 0,
        }
      ),
    [filteredTodos]
  );

  return (
    <S.Wrapper>
      <Modal
        title="Nova tarefa"
        onCloseModal={handleToggleModal}
        open={openModal}
      >
        <NewTodo onCloseModal={handleToggleModal} />
      </Modal>

      <S.TodoWrapper hastodos={!!filteredTodos.length}>
        <div id="header">
          <p>{todos.length ? 'Suas tarefas' : 'Sem tarefas'}</p>
          <div id="badges">
            <Badge
              title={`Totais ${quantities.total}`}
              fontColor={theme.colors.blue.main}
              backgroundColor={theme.colors.blue.lighter}
            />
            <Badge
              title={`Concluídas ${quantities.completeds}`}
              fontColor={theme.colors.success.dark}
              backgroundColor={theme.colors.success.lighter}
            />
            <Badge
              title={`Pendentes ${quantities.pendings}`}
              fontColor={theme.colors.danger.main}
              backgroundColor={theme.colors.danger.lighter}
            />
          </div>
        </div>
        <S.TodosList hastodos={!!filteredTodos.length}>
          {!!filteredTodos.length &&
            filteredTodos
              .sort((a: ITodo, b: ITodo) =>
                a.created_at.localeCompare(b.created_at)
              )
              .map((todo) => <TodoItem key={todo.id} todo={todo} />)}

          {filteredTodos.length < 1 && searchTerm.length > 0 ? null : (
            <button onClick={handleToggleModal}>
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
