import { render, screen } from 'utils/test-utils';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render the Checkbox square border correctly', () => {
    const { container } = render(<Checkbox />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toHaveStyle({
      borderRadius: 0,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Checkbox with rounded border correctly', () => {
    render(<Checkbox border="round" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toHaveStyle({
      borderRadius: '50%',
    });
  });
});
