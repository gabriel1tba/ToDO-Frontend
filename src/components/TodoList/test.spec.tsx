import userEvent from '@testing-library/user-event';
import { render, screen } from 'utils/test-utils';

import TodoList from '.';

jest.mock('../Badge', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Badge"></div>;
    },
  };
});

jest.mock('../Modal', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Modal"></div>;
    },
  };
});

describe('<TodoList />', () => {
  xit('should render the TodoList correctly', () => {
    render(<TodoList />);

    expect(screen.getAllByTestId('Mock Badge')).toHaveLength(3);
    expect(screen.getByText(/sem tarefas/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /adicione sua primeira tarefa/i })
    ).toBeInTheDocument();
  });

  xit('should open the modal to create a new whole', () => {
    render(
      <>
        <div id="portal-modal-root" />
        <TodoList />
      </>
    );

    userEvent.click(
      screen.getByRole('button', { name: /adicione sua primeira tarefa/i })
    );

    expect(screen.getByTestId('Mock Modal')).toBeInTheDocument();
  });
});
