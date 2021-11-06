import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import * as S from './styles';

import { useToast } from 'hooks';

import logoImg from 'assets/logo.png';

import Input from 'components/Input';
import Button from 'components/Button';

import api from 'services/api';

import { schema } from './schema';

interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm<ISignUpFormData>({
    resolver: yupResolver(schema),
  });

  const { addToast } = useToast();
  const history = useHistory();

  const onSubmit = async (data: ISignUpFormData) => {
    try {
      await api.post('user', data);

      addToast({
        type: 'success',
        title: 'Cadastrado com sucesso!',
        description: 'Você será redirecionado em instantes...',
        secondsDuration: 3,
      });

      setTimeout(() => {
        history.push('/');
      }, 3000);
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
              name="name"
              type="text"
              placeholder="Nome"
              error={errors.name?.message}
              ref={register}
            />
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
            <Input
              icon={FiLock}
              name="confirmPassword"
              type="password"
              placeholder="Confirme a senha"
              error={errors.confirmPassword?.message}
              ref={register}
            />

            <Button
              loading={formState.isSubmitting}
              size="fullWidth"
              background="#ff9000"
              type="submit"
            >
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
