import { useState, useMemo } from 'react';
import { BsClipboard, BsClipboardX } from 'react-icons/bs';

import { TTodo } from 'services/TodoService/interfaces';

import { useToggle } from 'hooks';

import { useTodosContext } from 'pages/Home';

import Modal from 'components/Modal';

import Card from '../Card';
import CreateTodo from '../Forms/CreateTodo';

import TodoItem from './components/TodoItem';
import Header from './components/Header';
import TasksInformation from './components/TasksInformation';

import * as S from './styles';

const TodoList = () => {
  const [searchTerm, setSearchTerm] = useState('');

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

  const hasFilteredTodos = filteredTodos.length > 0;
  const hasTodos = todos.length === 0;
  const notFoundTodos = !hasTodos && !hasFilteredTodos;

  return (
    <S.Wrapper>
      <Header
        searchTerm={searchTerm}
        onSearchTerm={setSearchTerm}
        onToggleModal={handleToggleModal}
      />

      <TasksInformation quantities={quantities} />

      <S.TodosWrapper>
        {hasFilteredTodos &&
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </S.TodosWrapper>

      {hasTodos && (
        <Card title="Você ainda não tem tarefas cadastradas" icon={BsClipboard}>
          <p>
            <div className="flex">
              Crie tarefas clicando no botão <strong>Nova tarefa</strong>
            </div>
          </p>
        </Card>
      )}

      {notFoundTodos && (
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
