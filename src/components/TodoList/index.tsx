import { useState, useMemo } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useTodos, useToggle } from 'hooks';

import Badge from '../Badge';
import Modal from '../Modal';
import TodoItem from './components/TodoItem';
import NewTodo from './components/Forms/NewTodo';
import Button from 'components/Button';

import magnifierQuestion from 'assets/icons/magnifier-question.svg';

import { ITodo } from 'interfaces';

const TodoList = () => {
  const theme = useTheme();
  const { todos } = useTodos();
  const [openModal, handleToggleModal] = useToggle();

  const [searchTerm, setSearchTerm] = useState('');

  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [todos, searchTerm]
  );

  const quantities = useMemo(
    () =>
      filteredTodos.reduce(
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
    [filteredTodos]
  );

  return (
    <S.Wrapper>
      <S.ListHeader>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
            fontColor="#D9D9D9"
            backgroundColor="#333333"
          />
        </div>

        <div>
          <p>Concluídas</p>
          <Badge
            title={`${quantities.completeds} de ${quantities.total} `}
            fontColor="#D9D9D9"
            backgroundColor="#333333"
          />
        </div>
      </S.ListInfos>

      <Modal
        title="Nova tarefa"
        open={openModal}
        onCloseModal={handleToggleModal}
      >
        <NewTodo onCloseModal={handleToggleModal} />
      </Modal>
    </S.Wrapper>
  );
};

export default TodoList;
