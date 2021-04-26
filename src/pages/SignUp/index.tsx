import { useState, useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { ValidationError } from 'yup';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { useToast } from '../../hooks/toast';

import * as S from './styles';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import { schema } from './schema';

import getValidationErros from '../../utils/getValidationErros';

interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const { addToast } = useToast();
  const history = useHistory();

  const formRef = useRef({} as FormHandles);

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: ISignUpFormData) => {
      setButtonLoading(true);

      try {
        formRef.current.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        addToast({
          type: 'success',
          title: 'Cadastrado com sucesso!',
          description: 'Você será redirecionado em instantes...',
          secondsDuration: 3,
        });

        setTimeout(() => {
          history.push('/');
        }, 3000);
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErros(error);

          formRef.current.setErrors(errors);

          setButtonLoading(false);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao cadastrar!',
          description:
            'Um erro inesperado aconteceu... Tente novamente mais tarde.',
          secondsDuration: 5,
        });
      }
      setButtonLoading(false);
    },
    [addToast, history],
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

          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Faça seu cadastro</h1>

            <Input icon={FiUser} name="name" type="text" placeholder="Nome" />
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
            <Input
              icon={FiLock}
              name="confirmPassword"
              type="password"
              placeholder="Confirme a senha"
            />

            <Button loading={buttonLoading} type="submit">
              Cadastrar
            </Button>
          </Form>
          <Link to="/">
            <FiArrowLeft /> Fazer login
          </Link>
        </S.AnimationContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default SignUp;
