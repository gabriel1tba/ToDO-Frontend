import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'utils/test-utils';

import NewTodo from '.';

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

  it('You must send data to the backend and close the form', async () => {
    const onCloseModal = jest.fn();
    render(<NewTodo userId="idtest" onCloseModal={onCloseModal} />);

    userEvent.type(screen.getByLabelText(/título/i), 'criar novo item');
    userEvent.type(screen.getByLabelText(/descrição/i), 'item de teste');

    userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    await waitFor(() => {
      expect(onCloseModal).toHaveBeenCalled();
    });
  });
});
