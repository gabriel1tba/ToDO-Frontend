import { render, screen } from 'utils/test-utils';

import Forgot from '.';

describe('<Forgot />', () => {
  it('should render the Forgot correctly', async () => {
    render(<Forgot />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
