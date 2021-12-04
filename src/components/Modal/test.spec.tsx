import { render, screen, waitFor } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';

import Modal from '.';

describe('<Modal />', () => {
  beforeEach(() => {
    render(<div id="portal-modal-root" />);
  });

  it('should render the Modal correctly', () => {
    const { container } = render(
      <Modal title="Cadastro de pessoas" open onCloseModal={() => ({})}>
        <form>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu email" />

          <button>Fechar</button>
          <button>Confirmar</button>
        </form>
      </Modal>,
    );

    expect(screen.getByText(/cadastro de pessoas/i)).toBeInTheDocument();

    expect(screen.getAllByRole('button')).toHaveLength(3);

    expect(screen.getAllByRole('textbox')).toHaveLength(2);

    expect(screen.getByPlaceholderText(/digite seu nome/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/digite seu email/i),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should no render Modal if open is false', () => {
    render(
      <Modal title="Cadastro de pessoas" open={false} onCloseModal={() => ({})}>
        <h1>Content Modal</h1>
      </Modal>,
    );

    expect(screen.queryByText(/content modal/i)).not.toBeInTheDocument();
  });

  it('should the method onCloseModal must be called correctly', async () => {
    const onCloseModal = jest.fn();

    render(
      <Modal title="Cadastro de pessoas" open onCloseModal={onCloseModal}>
        <h1>Content Modal</h1>
      </Modal>,
    );

    userEvent.click(screen.getAllByRole('button')[0]);

    await waitFor(() => {
      expect(onCloseModal).toHaveBeenCalled();
    });
  });
});
