import { render } from 'utils/test-utils';

import Loading from '.';

describe('<Loading />', () => {
  beforeEach(() => {
    render(<div id="portal-loader-root" />);
  });

  it('should render the Loading correctly', () => {
    const { container } = render(<Loading />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
