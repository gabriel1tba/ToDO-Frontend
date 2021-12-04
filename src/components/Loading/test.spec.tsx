import { render } from 'utils/test-utils';

import Loading from '.';

describe('<Loading />', () => {
  it('should render the Loading correctly', () => {
    const { container } = render(<Loading />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
