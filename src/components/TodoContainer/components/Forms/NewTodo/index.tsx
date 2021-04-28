import { useState, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';

import { FiPlus } from 'react-icons/fi';
import { AiOutlineHourglass } from 'react-icons/ai';

import * as S from './styles';

import Input from '../../../../Input';
import TextArea from '../../../../TextArea';

import { useToast } from '../../../../../hooks/toast';
import { useTodos } from '../../../../../hooks/todos';

import api from '../../../../../services/api';

import getValidationErros from '../../../../../utils/getValidationErros';

import { schema } from './schema';

import { IFormData } from '../../../interfaces';

interface INewTodo {
  user_id: string;
  handleCloseModal: () => void;
}

const NewTodo = ({ user_id, handleCloseModal }: INewTodo) => {
  const { addToast } = useToast();
  const { createTodo } = useTodos();

  const formRef = useRef({} as FormHandles);

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmit = useCallback(
    async (formData: IFormData) => {
      setButtonLoading(true);

      try {
        formRef.current.setErrors({});

        await schema.validate(formData, {
          abortEarly: false,
        });

        const { data } = await api.post('/todos', {
          user_id,
          title: formData.title,
          description: formData.description,
        });

        createTodo(data);

        addToast({
          type: 'success',
          title: 'Tarefa criada com sucesso!',
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
          title: 'Erro ao criar tarefa!',
          description:
            'Um erro inesperado aconteceu... Tente novamente mais tarde.',
          secondsDuration: 5,
        });
      }

      setButtonLoading(false);
      handleCloseModal();
    },
    [addToast, createTodo, handleCloseModal, user_id],
  );

  return (
    <S.Wrapper>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="title">Título</label>
        <Input name="title" type="text" />

        <label htmlFor="description">Descrição</label>
        <TextArea rows={4} name="description" />

        <S.Footer>
          <button style={{ backgroundColor: '#007bff' }} type="submit">
            {buttonLoading ? (
              <>
                <AiOutlineHourglass size={15} color="#FFF" /> Carregando...
              </>
            ) : (
              <>
                <FiPlus size={15} color="#FFF" /> Nova tarefa
              </>
            )}
          </button>
        </S.Footer>
      </Form>
    </S.Wrapper>
  );
};

export default NewTodo;
