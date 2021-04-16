import { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import * as S from './styles';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { schema } from './schema';

import getValidationErros from '../../utils/getValidationErros';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const formRef = useRef({} as FormHandles);

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      setButtonLoading(true);

      setTimeout(() => {
        setButtonLoading(false);
      }, 1000);

      try {
        formRef.current.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email: data.email, password: data.password });
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErros(error);

          formRef.current.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao fazer login!',
          description:
            'Cheque seu email e senha, ou tente novamente mais tarde!',
          secondsDuration: 3,
        });
      }
    },
    [addToast, signIn],
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

          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Faça seu logon </h1>

            <Input
              icon={FiMail}
              name="email"
              type="text"
              placeholder="E-mail"
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <Button loading={buttonLoading} type="submit">
              Entrar
            </Button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>
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
