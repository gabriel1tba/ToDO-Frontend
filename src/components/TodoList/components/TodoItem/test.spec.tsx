import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'utils/test-utils';
import MockAdapter from 'axios-mock-adapter';

import api from 'services/api';

const apiMock = new MockAdapter(api);

import TodoItem from '.';

const todoItemResponse = {
  id: 'todoId',
  user_id: 'userId',
  completed: false,
  title: 'Testar componente TodoItem',
  description: 'Testar em Todos os modos',
  created_at: '2021-10-10T07:12:55.137Z',
  updated_at: '2021-10-10T07:32:52.716Z',
};

describe('<TodoItem />', () => {
  it('should render the TodoItem correctly', () => {
    const { container } = render(<TodoItem todo={todoItemResponse} />);

    expect(screen.getByRole('checkbox')).not.toBeChecked();
    expect(screen.getByText(/testar componente todoitem/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the TodoItem with completed prop true', () => {
    render(<TodoItem todo={{ ...todoItemResponse, completed: true }} />);

    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByText(/testar componente todoitem/i)).toHaveStyle({
      textDecoration: 'line-through',
    });
  });

  it('should change completed status of whole to true', async () => {
    render(<TodoItem todo={todoItemResponse} />);

    expect(screen.getByRole('checkbox')).not.toBeChecked();

    userEvent.click(screen.getByRole('checkbox'));

    const responseCompleted = apiMock
      .onPatch('todos')
      .reply(() => [200, { ...todoItemResponse, completed: true }]);

    await waitFor(() => {
      expect(responseCompleted.history.patch.length).toBe(1);
    });

    await waitFor(() => {
      expect(responseCompleted.history.patch[0].data).toStrictEqual(
        JSON.stringify({
          id: 'todoId',
          completed: true,
          title: 'Testar componente TodoItem',
          description: 'Testar em Todos os modos',
        }),
      );
    });

    await waitFor(() => {
      expect(screen.getByRole('checkbox')).toBeChecked();
    });
  });
});
