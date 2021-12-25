import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'utils/test-utils';

import SignUp from '.';

describe('<SignUp />', () => {
  it('should render the SignUp correctly', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('img', { name: /logo com nome da pagina/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /faça seu cadastro/i }),
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/confirme a senha/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /cadastrar/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /fazer login/i }),
    ).toBeInTheDocument();
  });

  it('should display errors when not filling in fields', async () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>,
    );

    userEvent.click(screen.getByRole('button', { name: /cadastrar/i }));

    await waitFor(() => {
      expect(screen.getByText(/nome obrigatório!/i)).toBeInTheDocument();
      expect(screen.getByText(/e-mail obrigatório!/i)).toBeInTheDocument();
      expect(screen.getByText(/senha obrigatória!/i)).toBeInTheDocument();
      expect(
        screen.getByText(/confirmação de senha é obrigatória/i),
      ).toBeInTheDocument();
    });
  });

  it('should the method onSubmit be called correctly ', async () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>,
    );

    userEvent.type(screen.getByPlaceholderText(/nome/i), 'Teste');
    userEvent.type(screen.getByPlaceholderText(/e-mail/i), 'test@test.com');
    userEvent.type(screen.getByPlaceholderText('Senha'), 'testpass');
    userEvent.type(
      screen.getByPlaceholderText(/confirme a senha/i),
      'testpass',
    );

    await waitFor(() => {
      userEvent.click(screen.getByRole('button', { name: /cadastrar/i }));
    });
  });
});
