import userEvent from '@testing-library/user-event';
import { render, screen } from 'utils/test-utils';

import Input from '.';

describe('<Input />', () => {
  it('should render the Input correctly', () => {
    const { container } = render(
      <Input name="email" error="" placeholder="Digite seu e-mail" />,
    );

    expect(
      screen.getByPlaceholderText(/digite seu e-mail/i),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should write in the input', async () => {
    render(<Input name="email" error="" placeholder="Digite seu e-mail" />);

    userEvent.type(
      screen.getByPlaceholderText(/digite seu e-mail/i),
      'Testes finalizados',
    );

    expect(screen.getByPlaceholderText(/digite seu e-mail/i)).toHaveValue(
      'Testes finalizados',
    );
  });

  it('should render erros', () => {
    render(<Input name="email" error="Digite o e-mail corretamente" />);

    expect(
      screen.getByText(/digite o e-mail corretamente/i),
    ).toBeInTheDocument();
  });
});
