import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'utils/test-utils';

import SignIn from '.';

describe('<SignIn />', () => {
  it('should render the SignIn correctly', () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('img', { name: /logo com nome da pagina/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /faça seu login/i }),
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /esqueci minha senha/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /criar conta/i }),
    ).toBeInTheDocument();
  });

  it('should display errors when not filling in fields', async () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>,
    );

    userEvent.click(screen.getByRole('button', { name: /entrar/i }));

    await waitFor(() => {
      expect(screen.getByText(/e-mail obrigatório!/i)).toBeInTheDocument();
      expect(screen.getByText(/senha obrigatória!/i)).toBeInTheDocument();
    });
  });

  it('should the method onSubmit be called correctly ', async () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>,
    );

    userEvent.type(screen.getByPlaceholderText(/e-mail/i), 'test@test.com');
    userEvent.type(screen.getByPlaceholderText('Senha'), 'testpass');

    await waitFor(() => {
      userEvent.click(screen.getByRole('button', { name: /entrar/i }));
    });
  });
});
