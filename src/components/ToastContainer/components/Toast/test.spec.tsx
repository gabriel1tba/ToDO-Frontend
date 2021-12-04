import userEvent from '@testing-library/user-event';
import { render, screen } from 'utils/test-utils';

import Toast from '.';

const message = {
  id: '3c0e7f5d-02ed-4a97-9fe2-d901f7bbf275',
  title: 'Erro ao tentar logar!',
  description: 'Um erro inesperado aconteceu... Tente novamente mais tarde.',
  secondsDuration: 5,
};

describe('<Toast />', () => {
  it('should render the Toast correctly', () => {
    const { container } = render(<Toast style={{}} toastMessage={message} />);

    expect(screen.getByText(/erro ao tentar logar!/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /um erro inesperado aconteceu... Tente novamente mais tarde./i,
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should close toast', () => {
    render(
      <Toast style={{}} toastMessage={{ ...message, secondsDuration: 0 }} />,
    );

    userEvent.click(screen.getByRole('button'));
  });
});
