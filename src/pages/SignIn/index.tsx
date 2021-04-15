import { useCallback, useRef } from 'react';
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

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
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
          title: 'Erro na autenticação!',
          description: 'Por favor, cheque seu email e senha!',
          secondsDuration: 5,
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
            style={{ marginBottom: '-10%' }}
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

            <Button type="submit">Entrar</Button>

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
