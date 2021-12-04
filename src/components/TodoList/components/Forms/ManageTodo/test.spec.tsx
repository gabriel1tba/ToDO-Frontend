import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'utils/test-utils';

import ManageTodo from '.';

const todoItem = {
  id: 'todoId',
  user_id: 'userId',
  completed: false,
  title: 'Testar form ManageTodo',
  description: 'Testar em todos os modos',
  created_at: '2021-10-10T07:12:55.137Z',
  updated_at: '2021-10-10T07:32:52.716Z',
};

describe('<ManageTodo />', () => {
  // VIEW FORM TEST
  it('should render ManageTodocorrectly', () => {
    render(
      <ManageTodo
        todo={todoItem}
        editTodo={false}
        showTodo
        onCloseModal={() => ({})}
      />,
    );

    expect(screen.getByLabelText(/título/i)).toHaveValue(
      'Testar form ManageTodo',
    );
    expect(screen.getByLabelText(/título/i)).toHaveStyle({
      pointerEvents: 'none',
    });

    expect(screen.getByLabelText(/descrição/i)).toHaveValue(
      'Testar em todos os modos',
    );
    expect(screen.getByLabelText(/descrição/i)).toHaveStyle({
      pointerEvents: 'none',
    });

    expect(screen.getByText(/criado em:/i)).toBeInTheDocument();
    expect(screen.getByText('10/10/2021 04:12:55')).toBeInTheDocument();

    expect(screen.getByText(/atualizado em:/i)).toBeInTheDocument();
    expect(screen.getByText('10/10/2021 04:32:52')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /fechar/i })).toBeInTheDocument();
  });

  // VIEW FORM TEST
  it('should the method onCloseModal must be called correctly', () => {
    const onCloseModal = jest.fn();
    render(
      <ManageTodo
        todo={todoItem}
        editTodo={false}
        showTodo
        onCloseModal={onCloseModal}
      />,
    );

    userEvent.click(screen.getByRole('button', { name: /fechar/i }));
  });

  // EDIT FORM TEST
  it('should render ManageTodo Edit Mode correctly', () => {
    render(
      <ManageTodo
        todo={todoItem}
        editTodo
        showTodo={false}
        onCloseModal={() => ({})}
      />,
    );

    expect(screen.getByLabelText(/título/i)).toHaveValue(
      'Testar form ManageTodo',
    );
    expect(screen.getByLabelText(/título/i)).toHaveStyle({
      pointerEvents: 'all',
    });

    expect(screen.getByLabelText(/descrição/i)).toHaveValue(
      'Testar em todos os modos',
    );
    expect(screen.getByLabelText(/descrição/i)).toHaveStyle({
      pointerEvents: 'all',
    });

    expect(screen.getByText(/criado em:/i)).toBeInTheDocument();
    expect(screen.getByText('10/10/2021 04:12:55')).toBeInTheDocument();

    expect(screen.getByText(/atualizado em:/i)).toBeInTheDocument();
    expect(screen.getByText('10/10/2021 04:32:52')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /salvar alterações/i }),
    ).toBeInTheDocument();
  });

  // EDIT FORM TEST
  it('should render ManageTodo correctly with message erros on textbox', async () => {
    render(
      <ManageTodo
        todo={{ ...todoItem, title: '' }}
        editTodo
        showTodo={false}
        onCloseModal={() => ({})}
      />,
    );

    userEvent.click(screen.getByRole('button', { name: /salvar alterações/i }));

    await waitFor(() => {
      expect(screen.getByText('O título é obrigatório!')).toBeInTheDocument();
    });
  });

  // EDIT FORM TEST
  it('You must send data to the backend and close the form', async () => {
    const onCloseModal = jest.fn();
    render(
      <ManageTodo
        todo={todoItem}
        editTodo
        showTodo={false}
        onCloseModal={onCloseModal}
      />,
    );

    userEvent.type(screen.getByLabelText(/título/i), 'criar novo item');
    userEvent.type(screen.getByLabelText(/descrição/i), 'item de teste');

    userEvent.click(screen.getByRole('button', { name: /salvar alterações/i }));

    await waitFor(() => {
      expect(onCloseModal).toHaveBeenCalled();
    });
  });

  // REMOVE FORM TEST
  it('should render ManageTodo Edit Mode correctly', () => {
    render(
      <ManageTodo
        todo={todoItem}
        editTodo={false}
        showTodo={false}
        onCloseModal={() => ({})}
      />,
    );

    expect(screen.getByLabelText(/título/i)).toHaveValue(
      'Testar form ManageTodo',
    );
    expect(screen.getByLabelText(/título/i)).toHaveStyle({
      pointerEvents: 'none',
    });

    expect(screen.getByLabelText(/descrição/i)).toHaveValue(
      'Testar em todos os modos',
    );
    expect(screen.getByLabelText(/descrição/i)).toHaveStyle({
      pointerEvents: 'none',
    });

    expect(screen.getByText(/criado em:/i)).toBeInTheDocument();
    expect(screen.getByText('10/10/2021 04:12:55')).toBeInTheDocument();

    expect(screen.getByText(/atualizado em:/i)).toBeInTheDocument();
    expect(screen.getByText('10/10/2021 04:32:52')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /confirmar exclusão/i }),
    ).toBeInTheDocument();
  });

  // REMOVE FORM TEST
  it('You must send data to the backend and close the form', async () => {
    const onCloseModal = jest.fn();
    render(
      <ManageTodo
        todo={todoItem}
        editTodo={false}
        showTodo={false}
        onCloseModal={onCloseModal}
      />,
    );

    userEvent.type(screen.getByLabelText(/título/i), 'criar novo item');
    userEvent.type(screen.getByLabelText(/descrição/i), 'item de teste');

    userEvent.click(
      screen.getByRole('button', { name: /confirmar exclusão/i }),
    );

    await waitFor(() => {
      expect(onCloseModal).toHaveBeenCalled();
    });
  });
});
