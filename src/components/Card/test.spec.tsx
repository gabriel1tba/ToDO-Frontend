import { FaUser } from 'react-icons/fa';
import { render, screen } from 'utils/test-utils';

import Card from '.';

describe('<Card />', () => {
  beforeEach(() => {
    render(<div id="portal-modal-root" />);
  });

  it('should render the Card correctly', () => {
    const { container } = render(
      <Card icon={FaUser} title="Card Title" description="Card Description" />
    );

    expect(screen.getByText(/card title/i)).toBeInTheDocument();
    expect(screen.getByText(/card description/i)).toBeInTheDocument();

    expect(screen.getByText(/card title/i).parentElement).toHaveStyle({
      color: '#616161',
      border: '1px solid #BCBCBC',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Card variant Danger correctly', () => {
    render(
      <Card
        icon={FaUser}
        title="Card Title"
        description="Card Description"
        color="danger"
      />
    );

    expect(screen.getByText(/card title/i).parentElement).toHaveStyle({
      color: '#FF1744',
      border: '1px solid #FF5252',
    });
  });
});
