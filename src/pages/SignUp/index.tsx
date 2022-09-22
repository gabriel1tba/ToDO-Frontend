import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import * as S from './styles';

import { useToast } from 'hooks';

import UserService from 'services/UserService';

import logoImg from 'assets/logo.png';

import Input from 'components/Input';
import Button from 'components/Button';

import { schema } from './schema';
import delay from 'utils/delay';

import { ICredentialsRegister } from 'interfaces';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ICredentialsRegister>({
    resolver: yupResolver(schema),
  });

  const { addToast } = useToast();

  const history = useHistory();

  const onSubmit = async (dataForm: ICredentialsRegister) => {
    try {
      await UserService.createUser(dataForm);

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
  };

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

          <form onSubmit={handleSubmit(onSubmit)}>
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
