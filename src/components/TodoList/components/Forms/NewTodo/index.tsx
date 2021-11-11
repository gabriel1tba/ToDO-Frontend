import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiPlus } from 'react-icons/fi';

import * as S from './styles';

import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

import { useToast, useTodos } from 'hooks';

import api from 'services/api';

import { schema } from './schema';

import { IFormData } from '../../../interfaces';

import { ActionType } from 'context/todos/actions';

interface INewTodo {
  userId: string;
  onCloseModal: () => void;
}

const NewTodo = ({ userId, onCloseModal }: INewTodo) => {
  const { register, handleSubmit, errors, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const { addToast } = useToast();
  const { todoDispatch } = useTodos();

  const onSubmit = async (formData: IFormData) => {
    try {
      await schema.validate(formData, {
        abortEarly: false,
      });

      const { data } = await api.post('/todos', {
        user_id: userId,
        title: formData.title,
        description: formData.description,
      });

      todoDispatch({ type: ActionType.CreateTodo, payload: data });

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

    onCloseModal();
  };

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
          <Button
            background="#007bff"
            type="submit"
            icon={<FiPlus size={18} />}
            loading={formState.isSubmitting}
          >
            Salvar
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  );
};

export default NewTodo;
