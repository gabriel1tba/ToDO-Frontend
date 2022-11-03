import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { AxiosError } from 'axios';

import { useAuthContext, useToastContext } from 'hooks';

import { ILoginUserRequest } from 'services/UserService/interfaces';

import Input from 'components/Input';
import Button from 'components/Button';

import logoImg from 'assets/logo.png';

import * as S from './styles';

import { schema } from './schema';

const SignIn = () => {
  const [, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginUserRequest>({
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuthContext();
  const { addToast } = useToastContext();

  const onSubmit = handleSubmit(
    async ({ email, password }: ILoginUserRequest) => {
      try {
        await signIn({ email, password });
      } catch (err) {
        const error = err as AxiosError;

        if (error.response?.status === 401) {
          addToast({
            type: 'error',
            title: 'Dados não cadastrados!',
            description: 'E-mail e/ou senha inválidos.',
            secondsDuration: 5,
          });
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao tentar logar!',
          description:
            'Um erro inesperado aconteceu... Tente novamente mais tarde.',
          secondsDuration: 5,
        });
      }
    }
  );

  return (
    <S.Wrapper>
      <S.Content>
        <S.AnimationContainer>
          <img
            style={{ marginBottom: '-20%' }}
            src={logoImg}
            alt="logo com nome da pagina"
          />

          <form onSubmit={onSubmit}>
            <h1>Faça seu login </h1>

            <Input
              icon={FiMail}
              type="text"
              placeholder="E-mail"
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              icon={FiLock}
              type="password"
              placeholder="Senha"
              error={errors.password?.message}
              {...register('password')}
            />

            <Button loading={isSubmitting} size="large" type="submit">
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
