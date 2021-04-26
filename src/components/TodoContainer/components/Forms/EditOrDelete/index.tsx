import { useState, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';

import * as S from './styles';

import getValidationErros from '../../../../../utils/getValidationErros';

import { schema } from './schema';

import Input from '../../../../Input';
import TextArea from '../../../../TextArea';

import { useToast } from '../../../../../hooks/toast';
import Loading from '../../../../Loading';

interface IFormData {
  title: string;
  description: string;
}

const EditOrDelete = () => {
  const { addToast } = useToast();

  const formRef = useRef({} as FormHandles);

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      setButtonLoading(true);

      setTimeout(() => {
        setButtonLoading(false);
      }, 1000);

      try {
        formRef.current.setErrors({});
        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          type: 'success',
          title: 'Cadastrado com sucesso!',
          description: 'Você será redirecionado em instantes...',
          secondsDuration: 3,
        });

        console.log(data);
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErros(error);

          formRef.current.setErrors(errors);

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

      setButtonLoading(false);
    },
    [addToast],
  );

  return (
    <S.Wrapper>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input name="title" type="text" placeholder="Título" />
        <TextArea rows={4} name="description" placeholder="Descrição" />
        <S.Button color=" #007bff" type="submit">
          {buttonLoading ? (
            <Loading typeLoading="roller" />
          ) : (
            'Salvar alterações'
          )}
        </S.Button>
      </Form>
    </S.Wrapper>
  );
};

export default EditOrDelete;
