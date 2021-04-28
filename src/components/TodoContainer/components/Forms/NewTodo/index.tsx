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

import formattedTimestamp from '../../../../../utils/formattedTimestamp';

import { schema } from './schema';

import { IFormData, Item } from '../../../interfaces';

interface INewTodo {
  todo: Item;
  handleCloseModal: () => void;
}

const ManageTodo = ({ todo, handleCloseModal }: INewTodo) => {
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
          id: todo.user_id,
          title: formData.title,
          description: formData.description,
        });

        createTodo(data);

        addToast({
          type: 'success',
          title: 'Adicionado com sucesso!',
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
    [addToast, createTodo, handleCloseModal, todo.user_id],
  );

  return (
    <S.Wrapper>
      <Form
        initialData={{ title: todo.title, description: todo.description }}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <label htmlFor="title">Título</label>
        <Input name="title" type="text" />

        <label htmlFor="description">Descrição</label>
        <TextArea rows={4} name="description" />

        <S.TimeWrapper style={{ marginTop: '30px' }}>
          <div>
            <strong>Criado em </strong>
            <small>{formattedTimestamp(todo.created_at)}</small>
          </div>

          <div>
            <strong>Atualizado em </strong>
            <small>{formattedTimestamp(todo.updated_at)}</small>
          </div>
        </S.TimeWrapper>
        <S.Footer>
          <button style={{ backgroundColor: '#dc3545' }} type="submit">
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

export default ManageTodo;
