import { render, screen } from 'utils/test-utils';

import Alert from '.';

describe('<Alert />', () => {
  beforeEach(() => {
    render(<div id="portal-modal-root" />);
  });

  it('should render the Alert correctly', () => {
    const { container } = render(
      <Alert
        isOpen
        title="Deseja mesmo excluir essa tarefa?"
        description="Essa ação não poderá ser desfeita"
        onCancel={() => null}
        onConfirm={() => null}
      />
    );

    expect(
      screen.getByText(/deseja mesmo excluir essa tarefa?/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/essa ação não poderá ser desfeita?/i)
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Alert loading correctly', () => {
    render(
      <Alert
        isOpen
        isLoading
        title="Deseja mesmo excluir essa tarefa?"
        description="Essa ação não poderá ser desfeita"
        onCancel={() => null}
        onConfirm={() => null}
      />
    );

    expect(screen.getByRole('button', { name: 'Cancelar' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Sim, excluir' })).toBeDisabled();
  });
});
