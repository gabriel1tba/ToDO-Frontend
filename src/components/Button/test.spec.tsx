import { render, screen } from 'utils/test-utils';
import { FiPlus } from 'react-icons/fi';

import Button from '.';

describe('<Button />', () => {
  it('should render the Button correctly without icon', () => {
    const { container } = render(<Button background="#007bff">Salvar</Button>);

    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument();

    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#007bff',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Button correctly with icon icon', () => {
    render(
      <Button
        background="#007bff"
        icon={<FiPlus data-testid="add-icon" size={18} />}
      >
        Com ícone
      </Button>,
    );

    expect(
      screen.getByRole('button', { name: /com ícone/i }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('add-icon')).toBeInTheDocument();
  });

  it('should render the Button correctly with icon icon', () => {
    render(
      <Button background="#007bff" loading>
        Com ícone
      </Button>,
    );

    expect(screen.getByText(/carregando.../i)).toBeInTheDocument();
  });

  it('should render the Button correctly with large size', () => {
    const { container } = render(
      <Button background="#007bff" size="large">
        Com ícone
      </Button>,
    );

    expect(container.firstChild).toHaveStyle({
      height: '52px',
      borderRadius: '10px',
      padding: '0 16px',
      width: '100%',
    });
  });
});
