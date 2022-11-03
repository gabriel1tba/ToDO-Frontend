import { useState, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { BiPlusCircle } from 'react-icons/bi';
import { BsClipboard, BsClipboardX } from 'react-icons/bs';

import { TTodo } from 'services/TodoService/interfaces';

import { useToggle } from 'hooks';

import { useTodosContext } from 'pages/Home';

import Badge from 'components/Badge';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Card from 'components/Card';
import TodoItem from './TodoItem';
import CreateTodo from '../Forms/CreateTodo';

import * as S from './styles';

const TodoList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const theme = useTheme();
  const { todos } = useTodosContext();
  const [openModal, handleToggleModal] = useToggle();

  const filteredTodos = useMemo(
    () =>
      todos
        .filter((todo) =>
          todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a: TTodo, b: TTodo) => a.created_at.localeCompare(b.created_at)),
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
          placeholder="Buscar..."
        />

        <Button
          variant="primary"
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
            color={theme.colors.gray[100]}
            background={theme.colors.gray[700]}
          />
        </div>

        <div>
          <p>Concluídas</p>
          <Badge
            title={`${quantities.completeds} de ${quantities.total} `}
            color={theme.colors.gray[100]}
            background={theme.colors.gray[700]}
          />
        </div>
      </S.ListInfos>

      <S.TodosWrapper>
        {Boolean(filteredTodos.length) &&
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </S.TodosWrapper>

      {todos.length === 0 && (
        <Card title="Você ainda não tem tarefas cadastradas" icon={BsClipboard}>
          <p>
            <div className="flex">
              Crie tarefas clicando no botão <strong>Nova tarefa</strong>
            </div>
          </p>
        </Card>
      )}

      {todos.length > 0 && filteredTodos.length === 0 && (
        <Card
          title="Nenhuma tarefa encontrada"
          icon={BsClipboardX}
          color="danger"
        >
          <div className="flex">
            <p>
              Não encontramos nenhuma tarefa com o termo{' '}
              <strong>{`"${searchTerm}"`}</strong>
            </p>
          </div>
        </Card>
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
