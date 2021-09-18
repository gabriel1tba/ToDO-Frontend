import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { useAuth } from 'hooks/auth';
import { useToast } from 'hooks/toast';

import * as S from './styles';

import logoImg from 'assets/logo.png';

import Input from 'components/Input';
import Button from 'components/Button';

import { schema } from './schema';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm<ISignInFormData>({
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuth();
  const { addToast } = useToast();

  // State to useEffect cleanup function
  const [, setDidMount] = useState(false);

  const onSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        await signIn({ email: data.email, password: data.password });
      } catch {
        addToast({
          type: 'error',
          title: 'Erro ao tentar logar!',
          description:
            'Um erro inesperado aconteceu... Tente novamente mais tarde.',
          secondsDuration: 5,
        });
      }
    },
    [addToast, signIn],
  );

  // useEffect cleanup function
  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  return (
    <S.Wrapper>
      <S.Content>
        <S.AnimationContainer>
          <img
            style={{ marginBottom: '-20%' }}
            src={logoImg}
            alt="logo com nome da pagina"
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Faça seu login </h1>

            <Input
              icon={FiMail}
              name="email"
              type="text"
              placeholder="E-mail"
              error={errors.email?.message}
              ref={register}
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
              error={errors.password?.message}
              ref={register}
            />

            <Button
              loading={!formState.isSubmitting}
              size="fullWidth"
              background="#ff9000"
              type="submit"
            >
              Entrar
            </Button>

            <Link to="forgot">Esqueci minha senha</Link>
          </form>
          <Link to="/register">
            <FiLogIn /> Criar conta
          </Link>
        </S.AnimationContainer>
      </S.Content>

      <S.Background />
    </S.Wrapper>
  );
};

export default SignIn;
