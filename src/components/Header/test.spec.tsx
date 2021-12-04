import { render } from '@testing-library/react';

import Header from '.';

describe('<Header />', () => {
  it('should render the Header correctly', () => {
    render(<Header userName="Gabriel" onSignOut={() => ({})} />);

    // expect(container.firstChild).toMatchSnapshot();
  });
});
