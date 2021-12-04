import { render, screen } from 'utils/test-utils';

import Badge from '.';

describe('<Badge />', () => {
  it('should render the Badge correctly', () => {
    const { container } = render(
      <Badge
        title="Tarefas atuais"
        fontColor="#3498db"
        backgroundColor="rgba(52, 152, 219, 0.2)"
      />,
    );

    expect(screen.getByText(/tarefas atuais/i)).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({
      color: '#3498db',
      backgroundColor: 'rgba(52, 152, 219, 0.2)',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
