import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineHourglass } from 'react-icons/ai';

import * as S from './styles';

import Input from 'components/Input';
import TextArea from 'components/TextArea';

import { useToast } from 'hooks/toast';
import { useTodos } from 'hooks/todos';

import api from 'services/api';

import { schema } from './schema';

import { IFormData } from '../../../interfaces';

interface INewTodo {
  user_id: string;
  handleCloseModal: () => void;
}

const NewTodo = ({ user_id, handleCloseModal }: INewTodo) => {
  const { register, handleSubmit, errors } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const { addToast } = useToast();
  const { createTodo } = useTodos();

  const [buttonLoading, setButtonLoading] = useState(false);

  const onSubmit = useCallback(
    async (formData: IFormData) => {
      setButtonLoading(true);

      try {
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
      } catch {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Título</label>
        <Input
          name="title"
          type="text"
          error={errors.title?.message}
          ref={register}
        />

        <label htmlFor="description">Descrição</label>
        <TextArea
          rows={4}
          name="description"
          error={errors.description?.message}
          ref={register}
        />

        <S.Footer>
          <button style={{ backgroundColor: '#007bff' }} type="submit">
            {buttonLoading ? (
              <>
                <AiOutlineHourglass size={15} /> Carregando...
              </>
            ) : (
              <>
                <FiPlus size={15} /> Salvar
              </>
            )}
          </button>
        </S.Footer>
      </form>
    </S.Wrapper>
  );
};

export default NewTodo;
