import { render } from 'utils/test-utils';

import Loader from '.';

describe('<Loader />', () => {
  beforeAll(() => {
    render(<div id="portal-loader-root" />);
  });

  it('should render the Loader correctly', () => {
    const { container } = render(<Loader alwaysOnTop size={32} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
