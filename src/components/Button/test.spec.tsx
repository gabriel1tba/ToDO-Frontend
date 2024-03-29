import { render, screen } from 'utils/test-utils';
import { FiPlus } from 'react-icons/fi';

import Button from '.';

jest.mock('components/Loader', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Loader"></div>;
    },
  };
});

describe('<Button />', () => {
  it('should render the Button correctly', () => {
    const { container } = render(<Button>Salvar</Button>);

    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument();

    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#ff9000',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Button correctly with icon icon', () => {
    render(
      <Button icon={<FiPlus data-testid="add-icon" size={18} />}>
        Com ícone
      </Button>
    );

    expect(
      screen.getByRole('button', { name: /com ícone/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId('add-icon')).toBeInTheDocument();
  });

  it('should render the Button correctly with loading true', () => {
    render(<Button loading>Com loading</Button>);

    expect(screen.getByText(/Com loading/i)).toBeInTheDocument();

    expect(screen.getByTestId('Mock Loader')).toBeInTheDocument();
  });

  it('should render the Button correctly with large size', () => {
    const { container } = render(<Button size="large">Com ícone</Button>);

    expect(container.firstChild).toHaveStyle({
      height: '52px',
      borderRadius: '10px',
      padding: '0 16px',
      width: '100%',
    });
  });
});
