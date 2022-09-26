import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'utils/test-utils';
import MockAdapter from 'axios-mock-adapter';

import CreateTodo from '.';

import HttpClient from 'services/utils/HttpClient';
const apiMock = new MockAdapter(HttpClient);

const storedUser = {
  user: {
    id: '8841a292-315f-4fa8-b791-d20c1e2c6a7c',
    name: 'Gabriel Ferreira',
    email: 'email@example.com',
    created_at: '2021-12-06T13:09:13.732Z',
    updated_at: '2021-12-06T13:09:13.732Z',
  },
  token: 'eyJhbGCIpXVCJ9.eU3NywicDQyZTk5In0.S_IaG-UxiO08M',
};

describe('<CreateTodo />', () => {
  beforeAll(() => {
    window.localStorage.setItem(
      '@TodoApp:user',
      JSON.stringify(storedUser.user)
    );
    window.localStorage.setItem(
      '@TodoApp:token',
      JSON.stringify(storedUser.token)
    );
  });

  it('should render CreateTodo correctly', async () => {
    render(<CreateTodo onCloseModal={() => ({})} />);

    expect(screen.getByLabelText(/título/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/descrição/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument();
  });

  it('should render CreateTodo correctly with message erros on textbox', async () => {
    render(<CreateTodo onCloseModal={() => ({})} />);

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    await waitFor(() => {
      expect(screen.getByText(/o título é obrigatório!/i)).toBeInTheDocument();
    });
  });

  it('should send data to the backend and close the form', async () => {
    const onCloseModal = jest.fn();
    render(<CreateTodo onCloseModal={onCloseModal} />);

    userEvent.type(screen.getByLabelText(/título/i), 'criar novo item');
    userEvent.type(screen.getByLabelText(/descrição/i), 'item de teste');

    const requestSuccessCompleted = apiMock.onPost('todos').reply(200, {
      id: 'e7fd8f32-09c7-4d41-a452-36cab0bf132f',
      user_id: '8841a292-315f-4fa8-b791-d20c1e2c6a7c',
      description: 'item de teste',
      title: 'criar novo item',
      completed: false,
      created_at: '2021-10-10T07:12:55.137Z',
      updated_at: '2021-10-10T07:32:52.716Z',
    });

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    await waitFor(() => {
      expect(requestSuccessCompleted.history.post.length).toBe(1);
    });

    await waitFor(() => {
      expect(requestSuccessCompleted.history.post[0].data).toStrictEqual(
        JSON.stringify({
          user_id: '8841a292-315f-4fa8-b791-d20c1e2c6a7c',
          title: 'criar novo item',
          description: 'item de teste',
        })
      );
    });

    await waitFor(() => {
      expect(onCloseModal).toHaveBeenCalled();
    });
  });

  it('should receive an error status when send data', async () => {
    const onCloseModal = jest.fn();
    render(<CreateTodo onCloseModal={onCloseModal} />);

    userEvent.type(screen.getByLabelText(/título/i), 'criar novo item');
    userEvent.type(screen.getByLabelText(/descrição/i), 'item de teste');

    const requestErrorCompleted = apiMock.onPost('todos').reply(500);

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    await waitFor(() => {
      expect(requestErrorCompleted.history.post.length).toBe(1);
    });

    await waitFor(() => {
      expect(onCloseModal).not.toHaveBeenCalled();
    });
  });
});
