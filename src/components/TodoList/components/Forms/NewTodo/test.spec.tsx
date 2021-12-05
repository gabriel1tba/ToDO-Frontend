import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'utils/test-utils';
import MockAdapter from 'axios-mock-adapter';

import NewTodo from '.';

import api from 'services/api';
const apiMock = new MockAdapter(api);

describe('<NewTodo />', () => {
  it('should render NewTodo correctly', () => {
    render(<NewTodo userId="idtest" onCloseModal={() => ({})} />);

    expect(screen.getByLabelText(/título/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/descrição/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument();
  });

  it('should render NewTodo correctly with message erros on textbox', async () => {
    render(<NewTodo userId="idtest" onCloseModal={() => ({})} />);

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    await waitFor(() => {
      expect(screen.getByText(/o título é obrigatório!/i)).toBeInTheDocument();
    });
  });

  it('should send data to the backend and close the form', async () => {
    const onCloseModal = jest.fn();
    render(<NewTodo userId="idtest" onCloseModal={onCloseModal} />);

    userEvent.type(screen.getByLabelText(/título/i), 'criar novo item');
    userEvent.type(screen.getByLabelText(/descrição/i), 'item de teste');

    const successCompleted = apiMock.onPost('todos').reply(() => [
      200,
      {
        user_id: 'idtest',
        title: 'criar novo item',
        description: 'item de teste',
      },
    ]);

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    await waitFor(() => {
      expect(successCompleted.history.post.length).toBe(1);
    });

    await waitFor(() => {
      expect(successCompleted.history.post[0].data).toStrictEqual(
        JSON.stringify({
          user_id: 'idtest',
          title: 'criar novo item',
          description: 'item de teste',
        }),
      );
    });

    await waitFor(() => {
      expect(onCloseModal).toHaveBeenCalled();
    });
  });

  it('should receive an error status when send data', async () => {
    const onCloseModal = jest.fn();
    render(<NewTodo userId="idtest" onCloseModal={onCloseModal} />);

    userEvent.type(screen.getByLabelText(/título/i), 'criar novo item');
    userEvent.type(screen.getByLabelText(/descrição/i), 'item de teste');

    const successCompleted = apiMock.onPost('todos').reply(() => [500]);

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    await waitFor(() => {
      expect(successCompleted.history.post.length).toBe(1);
    });

    await waitFor(() => {
      expect(onCloseModal).not.toHaveBeenCalled();
    });
  });
});
