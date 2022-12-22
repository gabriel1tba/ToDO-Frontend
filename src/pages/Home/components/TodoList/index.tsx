import { BsClipboard, BsClipboardX } from 'react-icons/bs';
import { BiPlusCircle } from 'react-icons/bi';

import Button from 'components/Button';
import Modal from 'components/Modal';
import Alert from 'components/Alert';

import FormEditTodo from '../FormEditTodo';
import InputSearch from '../InputSearch';
import TasksInformation from '../TasksInformation';
import Card from '../Card';
import FormCreateTodo from '../FormCreateTodo';
import TodoItem from '../TodoItem';

import useTodoList from './useTodoList';

import * as S from './styles';

const TodoList = () => {
  const {
    searchTerm,
    todos,
    filteredTodos,
    quantities,
    openAlert,
    openCreateTodoModal,
    alertLoading,
    editTodoModal,
    setSearchTerm,
    handleToggleCreateTodoModal,
    handleOpenAlert,
    handleCloseAlert,
    handleDeleteTodo,
    handleOpenEditTodoModal,
    handleCloseEditTodoModal,
  } = useTodoList();

  const hasFilteredTodos = filteredTodos.length > 0;
  const hasTodos = todos.length === 0;
  const notFoundTodos = !hasTodos && !hasFilteredTodos;

  return (
    <S.Wrapper>
      <section>
        <InputSearch searchTerm={searchTerm} onSearchTerm={setSearchTerm} />

        <Button
          variant="primary"
          icon={<BiPlusCircle />}
          onClick={handleToggleCreateTodoModal}
        >
          Nova tarefa
        </Button>
      </section>

      <TasksInformation quantities={quantities} />

      <S.TodosWrapper>
        {hasFilteredTodos &&
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEditTodoModal={handleOpenEditTodoModal}
              onOpenAlert={handleOpenAlert}
            />
          ))}
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
              Não encontramos nenhuma tarefa com{' '}
              <strong>{`"${searchTerm}"`}</strong>
            </p>
          </div>
        </Card>
      )}

      <Modal
        title="Nova tarefa"
        isOpen={openCreateTodoModal}
        onCloseModal={handleToggleCreateTodoModal}
      >
        <FormCreateTodo onCloseModal={handleToggleCreateTodoModal} />
      </Modal>

      <Modal
        title="Editar tarefa"
        onCloseModal={handleCloseEditTodoModal}
        isOpen={editTodoModal.isOpen}
      >
        <FormEditTodo
          todo={editTodoModal.todo}
          onCloseModal={handleCloseEditTodoModal}
        />
      </Modal>

      <Alert
        isOpen={openAlert.isOpen}
        isLoading={alertLoading}
        title={`Excluir tarefa "${openAlert.todo.title}"?`}
        description="Tem certeza que deseja excluir essa tarefa?"
        confirmLabel="Sim, excluir"
        onCancel={handleCloseAlert}
        onConfirm={() => handleDeleteTodo(openAlert.todo)}
      />
    </S.Wrapper>
  );
};

export default TodoList;
