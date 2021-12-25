import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'utils/test-utils';
import MockAdapter from 'axios-mock-adapter';

import ManageTodo from '.';

import api from 'services/api';
const apiMock = new MockAdapter(api);

const todoItem = {
  id: '8841a292-315f-4fa8-b791-d20c1e2c6a7c',
  user_id: 'b6e24b25-af86-4137-a94b-92a5cdda920f',
  completed: false,
  title: 'Testar form ManageTodo',
  description: 'Testar em todos os modos',
  created_at: '2021-10-10T07:12:55.137Z',
  updated_at: '2021-10-10T07:32:52.716Z',
};

describe('<ManageTodo />', () => {
  beforeEach(() => {
    apiMock.reset();
  });
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
        todo={{ ...todoItem, title: '', description: '' }}
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

  it('should send data to the backend and close the form', async () => {
    const onCloseModal = jest.fn();
    render(
      <ManageTodo
        todo={{ ...todoItem, title: '', description: '' }}
        editTodo
        showTodo={false}
        onCloseModal={onCloseModal}
      />,
    );

    userEvent.type(screen.getByLabelText(/título/i), 'alterar item');
    userEvent.type(
      screen.getByLabelText(/descrição/i),
      'item de teste alterado',
    );

    const requestSuccessEdit = apiMock.onPatch('todos').reply(() => [200]);

    userEvent.click(screen.getByRole('button', { name: /salvar alterações/i }));

    await waitFor(() => {
      expect(requestSuccessEdit.history.patch.length).toBe(1);
    });

    await waitFor(() => {
      expect(requestSuccessEdit.history.patch[0].data).toStrictEqual(
        JSON.stringify({
          id: '8841a292-315f-4fa8-b791-d20c1e2c6a7c',
          title: 'alterar item',
          description: 'item de teste alterado',
        }),
      );
    });

    await waitFor(() => {
      expect(onCloseModal).toHaveBeenCalled();
    });
  });

  it('should receive an error status when send data', async () => {
    const onCloseModal = jest.fn();
    render(
      <ManageTodo
        todo={{ ...todoItem, title: '', description: '' }}
        editTodo
        showTodo={false}
        onCloseModal={onCloseModal}
      />,
    );

    userEvent.type(screen.getByLabelText(/título/i), 'criar novo item');
    userEvent.type(screen.getByLabelText(/descrição/i), 'item de teste');

    const requestErrorEdit = apiMock.onPatch('todos').reply(() => [500]);

    userEvent.click(screen.getByRole('button', { name: /salvar alterações/i }));

    await waitFor(() => {
      expect(requestErrorEdit.history.patch.length).toBe(1);
    });

    await waitFor(() => {
      expect(onCloseModal).not.toHaveBeenCalled();
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
  it('should send data to the backend and close the form', async () => {
    const onCloseModal = jest.fn();
    render(
      <ManageTodo
        todo={todoItem}
        editTodo={false}
        showTodo={false}
        onCloseModal={onCloseModal}
      />,
    );

    expect(screen.getByLabelText(/título/i)).toHaveValue(
      'Testar form ManageTodo',
    );
    expect(screen.getByLabelText(/descrição/i)).toHaveValue(
      'Testar em todos os modos',
    );

    const requestSuccessDelete = apiMock.onDelete('todos').reply(() => [200]);

    userEvent.click(
      screen.getByRole('button', { name: /confirmar exclusão/i }),
    );

    await waitFor(() => {
      expect(requestSuccessDelete.history.delete.length).toBe(1);
    });

    await waitFor(() => {
      expect(requestSuccessDelete.history.delete[0].data).toStrictEqual(
        JSON.stringify({
          id: '8841a292-315f-4fa8-b791-d20c1e2c6a7c',
        }),
      );
    });

    await waitFor(() => {
      expect(onCloseModal).toHaveBeenCalled();
    });
  });

  it('should receive an error status when send data', async () => {
    const onCloseModal = jest.fn();
    render(
      <ManageTodo
        todo={todoItem}
        editTodo={false}
        showTodo={false}
        onCloseModal={onCloseModal}
      />,
    );

    const requestErrorDelete = apiMock.onDelete('todos').reply(() => [500]);

    userEvent.click(
      screen.getByRole('button', { name: /confirmar exclusão/i }),
    );

    await waitFor(() => {
      expect(requestErrorDelete.history.delete.length).toBe(1);
    });

    await waitFor(() => {
      expect(onCloseModal).not.toHaveBeenCalled();
    });
  });
});
