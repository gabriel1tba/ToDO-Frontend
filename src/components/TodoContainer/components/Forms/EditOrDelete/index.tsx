import { useState, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';

import * as S from './styles';

import Input from '../../../../Input';
import TextArea from '../../../../TextArea';
import Loading from '../../../../Loading';

import { useToast } from '../../../../../hooks/toast';

import getValidationErros from '../../../../../utils/getValidationErros';

import { schema } from './schema';

import { Item } from '../../../interfaces';

interface IFormData {
  title: string;
  description: string;
}

interface IEditOrDelete {
  todo: Item;
  handleCloseModal: () => void;
}

const EditOrDelete = ({ todo, handleCloseModal }: IEditOrDelete) => {
  const { addToast } = useToast();

  const formRef = useRef({} as FormHandles);

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      setButtonLoading(true);

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
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErros(error);

          formRef.current.setErrors(errors);

          setButtonLoading(false);

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
      handleCloseModal();
    },
    [addToast, handleCloseModal],
  );

  return (
    <S.Wrapper>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <label>
          Título
          <Input name="title" type="text" />
        </label>
        <label>
          Descrição <TextArea rows={3} name="description" />
        </label>
        <S.Footer color=" #28a745">
          <button type="submit">
            {buttonLoading ? (
              <Loading typeLoading="roller" />
            ) : (
              'Salvar alterações'
            )}
          </button>
        </S.Footer>
      </Form>
    </S.Wrapper>
  );
};

export default EditOrDelete;
