import { render } from 'utils/test-utils';

import Loading from '.';

describe('<Loading />', () => {
  beforeAll(() => {
    render(<div id="portal-loader-root" />);
  });

  it('should render the Loading correctly', () => {
    const { container } = render(<Loading size={32} onTop />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
