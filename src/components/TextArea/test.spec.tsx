import userEvent from '@testing-library/user-event';
import { render, screen } from 'utils/test-utils';

import TextArea from '.';

describe('<TextArea />', () => {
  it('should render the TextArea correctly with Label', () => {
    const { container } = render(
      <TextArea name="descrição" placeholder="Digite uma descrição" error="" />
    );

    expect(
      screen.getByPlaceholderText(/digite uma descrição/i)
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should write in the TextArea', async () => {
    render(
      <TextArea name="descrição" error="" placeholder="Digite uma descrição" />
    );

    userEvent.type(
      screen.getByPlaceholderText(/digite uma descrição/i),
      'Testes finalizados'
    );

    expect(screen.getByPlaceholderText(/digite uma descrição/i)).toHaveValue(
      'Testes finalizados'
    );
  });

  it('should render erros', async () => {
    render(<TextArea name="descrição" error="A descrição é obrigatória" />);

    expect(screen.getByText(/a descrição é obrigatória/i)).toBeInTheDocument();
  });
});
