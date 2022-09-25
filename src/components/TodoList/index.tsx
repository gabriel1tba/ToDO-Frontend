import { useState, useMemo } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { CgNotes } from 'react-icons/cg';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useTodos, useToggle } from 'hooks';

import Badge from 'components/Badge';
import Modal from 'components/Modal';
import TodoItem from './components/TodoItem';
import CreateTodo from './components/Forms/CreateTodo';
import Button from 'components/Button';
import Card from 'components/Card';

import { ITodo } from 'interfaces';

const TodoList = () => {
  const theme = useTheme();
  const { todos } = useTodos();
  const [openModal, handleToggleModal] = useToggle();

  const [searchTerm, setSearchTerm] = useState('');

  const filteredTodos = useMemo(
    () =>
      todos
        .filter((todo) =>
          todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a: ITodo, b: ITodo) => a.created_at.localeCompare(b.created_at)),
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

  return (
    <S.Wrapper>
      <S.ListHeader>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Busca..."
        />

        <Button
          color="primary"
          icon={<BiPlusCircle />}
          onClick={handleToggleModal}
        >
          Nova tarefa
        </Button>
      </S.ListHeader>

      <S.ListInfos>
        <div>
          <p>Tarefas criadas</p>
          <Badge
            title={quantities.total}
            fontColor={theme.colors.gray[100]}
            backgroundColor={theme.colors.gray[700]}
          />
        </div>

        <div>
          <p>Concluídas</p>
          <Badge
            title={`${quantities.completeds} de ${quantities.total} `}
            fontColor={theme.colors.gray[100]}
            backgroundColor={theme.colors.gray[700]}
          />
        </div>
      </S.ListInfos>

      <S.TodosWrapper>
        {Boolean(filteredTodos.length) &&
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </S.TodosWrapper>

      {todos.length === 0 && (
        <Card
          title="Você ainda não tem tarefas cadastradas"
          description="Crie tarefas clicando no botão <strong>Nova tarefa</strong>"
          icon={CgNotes}
        />
      )}

      <Modal
        title="Nova tarefa"
        open={openModal}
        onCloseModal={handleToggleModal}
      >
        <CreateTodo onCloseModal={handleToggleModal} />
      </Modal>
    </S.Wrapper>
  );
};

export default TodoList;
