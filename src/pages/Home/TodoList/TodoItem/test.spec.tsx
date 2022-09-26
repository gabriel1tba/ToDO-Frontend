import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'utils/test-utils';
import MockAdapter from 'axios-mock-adapter';

import HttpClient from 'services/utils/HttpClient';

const apiMock = new MockAdapter(HttpClient);
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

jest.mock('../Forms/ManageTodo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ManageTodo"></div>;
    },
  };
});

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

    const successCompleted = apiMock.onPatch('todos').reply(200);

    await waitFor(() => {
      expect(successCompleted.history.patch.length).toBe(1);
    });

    await waitFor(() => {
      expect(successCompleted.history.patch[0].data).toStrictEqual(
        JSON.stringify({
          id: 'todoId',
          title: 'Testar componente TodoItem',
          completed: true,
        })
      );
    });
  });

  it('should receive an error status when changing Completed status', async () => {
    render(<TodoItem todo={todoItemResponse} />);

    userEvent.click(screen.getByRole('checkbox'));

    const errorCompleted = apiMock.onPatch('todos').reply(500);

    await waitFor(() => {
      expect(errorCompleted.history.patch.length).toBe(2);
    });
  });

  it('should open the edit modal by clicking on some item', async () => {
    render(
      <>
        <div id="portal-modal-root" />
        <TodoItem todo={todoItemResponse} />
      </>
    );

    userEvent.click(screen.getAllByRole('button')[0]);

    await waitFor(() => {
      expect(screen.getByTestId('Mock ManageTodo')).toBeInTheDocument();
    });
  });
});
