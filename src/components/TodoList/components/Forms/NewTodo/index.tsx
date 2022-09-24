import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as S from './styles';

import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

import { useToast, useTodos, useAuth } from 'hooks';

import TodoService from 'services/TodoService';

import { schema } from './schema';

import { IFormData, INewTodo } from '../../../interfaces';

import { ActionType } from 'context/todos/actions';

const NewTodo = ({ onCloseModal }: INewTodo) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const { addToast } = useToast();
  const { todoDispatch } = useTodos();
  const { user } = useAuth();

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await TodoService.createTodo({
        user_id: user.id,
        title: formData.title,
        description: formData.description,
      });

      todoDispatch({ type: ActionType.CreateTodo, payload: data });

      addToast({
        type: 'success',
        title: 'Tarefa criada com sucesso!',
        secondsDuration: 3,
      });

      onCloseModal();
    } catch {
      addToast({
        type: 'error',
        title: 'Erro ao criar tarefa!',
        description:
          'Um erro inesperado aconteceu... Tente novamente mais tarde.',
        secondsDuration: 5,
      });
    }
  };

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Título</label>
        <Input
          id="title"
          type="text"
          error={errors.title?.message}
          {...register('title')}
        />

        <label htmlFor="description">Descrição</label>
        <TextArea
          rows={4}
          id="description"
          error={errors.description?.message}
          {...register('description')}
        />

        <S.Footer>
          <Button type="submit" loading={isSubmitting}>
            Salvar
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  );
};

export default NewTodo;
