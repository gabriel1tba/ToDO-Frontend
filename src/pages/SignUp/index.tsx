import { useCallback, useRef } from 'react';
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

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const { addToast } = useToast();
  const history = useHistory();

  const formRef = useRef({} as FormHandles);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        addToast({
          type: 'success',
          title: 'Cadastrado com sucesso',
          description: 'Você será redirecionado em instantes...',
          secondsDuration: 5,
        });

        setTimeout(() => {
          history.push('/');
        }, 5000);
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErros(error);

          formRef.current.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro!',
          description: 'Tente novamente mais, ou aguarde mais um pouco!',
          secondsDuration: 5,
        });
      }
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
            style={{ marginBottom: '-10%' }}
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

            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft /> Voltar para logon
          </Link>
        </S.AnimationContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default SignUp;
