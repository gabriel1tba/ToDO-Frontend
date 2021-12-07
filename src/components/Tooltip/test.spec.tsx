import { render, screen } from 'utils/test-utils';

import Tooltip from '.';

describe('<Tooltip />', () => {
  it('should render the Tooltip correctly', () => {
    const { container } = render(<Tooltip title="Item obrigatório" />);

    expect(container.firstChild).toHaveStyle({
      position: 'relative',
    });

    expect(screen.getByText(/item obrigatório/i)).toBeInTheDocument();

    expect(screen.getByText(/item obrigatório/i)).toHaveStyle({
      position: 'absolute',
      width: '160px',
      background: '#ff9000',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
