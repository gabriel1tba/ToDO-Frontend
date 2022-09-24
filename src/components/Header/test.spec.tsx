import { render, screen, waitFor } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';

import Header from '.';

describe('<Header />', () => {
  it('should render the Header correctly', () => {
    const { container } = render(
      <Header userName="Gabriel Ferreira" onSignOut={() => ({})} />
    );

    expect(
      screen.getByRole('img', { name: /logo image/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /seja bem-vindo/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /gabriel ferreira/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should check if the onSignOut was called when click button', async () => {
    const onSignOut = jest.fn();

    render(<Header userName="Gabriel Ferreira" onSignOut={onSignOut} />);

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(onSignOut).toBeCalled();
    });
  });

  it('should render the Header correctly without userName', () => {
    render(<Header onSignOut={() => ({})} />);

    expect(
      screen.queryByRole('heading', { name: /gabriel ferreira/i })
    ).not.toBeInTheDocument();

    expect(
      screen.queryByPlaceholderText(/pesquisar tarefas.../i)
    ).not.toBeInTheDocument();
  });
});
