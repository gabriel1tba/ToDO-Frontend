import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { useToast } from 'hooks';

import delay from 'utils/delay';

import UserService from 'services/UserService';
import { ICreateUserRequest } from 'services/UserService/interfaces';

import Input from 'components/Input';
import Button from 'components/Button';

import logoImg from 'assets/logo.png';

import * as S from './styles';

import { schema } from './schema';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ICreateUserRequest>({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const { addToast } = useToast();

  const onSubmit = handleSubmit(
    async ({ name, email, password, confirmPassword }: ICreateUserRequest) => {
      try {
        await UserService.createUser({
          name,
          email,
          password,
          confirmPassword,
        });

        addToast({
          type: 'success',
          title: 'Cadastrado com sucesso!',
          description: 'Você será redirecionado em instantes...',
          secondsDuration: 3,
        });

        await delay(3000);
        history.push('/');
      } catch {
        addToast({
          type: 'error',
          title: 'Erro ao cadastrar!',
          description:
            'Um erro inesperado aconteceu... Tente novamente mais tarde.',
          secondsDuration: 5,
        });
      }
    }
  );

  return (
    <S.Wrapper>
      <S.Background />

      <S.Content>
        <S.AnimationContainer>
          <img
            src={logoImg}
            style={{ marginBottom: '-20%' }}
            alt="logo com nome da pagina"
          />

          <form onSubmit={onSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input
              icon={FiUser}
              type="text"
              placeholder="Nome"
              error={errors.name?.message}
              {...register('name')}
            />
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
            <Input
              icon={FiLock}
              type="password"
              placeholder="Confirme a senha"
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />

            <Button loading={isSubmitting} size="large" type="submit">
              Cadastrar
            </Button>
          </form>
          <Link to="/">
            <FiArrowLeft /> Fazer login
          </Link>
        </S.AnimationContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default SignUp;
