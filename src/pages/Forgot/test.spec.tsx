import { render, screen } from 'utils/test-utils';

import Forgot from '.';

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>;
    },
  };
});

describe('<Forgot />', () => {
  it('should render the Forgot correctly', async () => {
    render(<Forgot />);

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument();

    expect(
      screen.getByRole('img', {
        name: /exibe um rato com equipamento de proteção e ferramentas de construção/i,
      })
    ).toBeInTheDocument();
  });
});
