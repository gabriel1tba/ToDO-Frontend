import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import TodoService from 'services/TodoService';

import { useToastContext, useAuthContext } from 'hooks';
import { useTodosContext } from 'pages/Home';
import { createTodoAction } from 'pages/Home/utils/actions';

import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

import { schema } from '../../utils/schema';

import * as S from './styles';

import { IFormData, IFormTodo } from '../../interfaces';

const FormCreateTodo = ({ onCloseModal }: IFormTodo) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const { addToast } = useToastContext();
  const { dispatchTodos } = useTodosContext();
  const { user } = useAuthContext();

  const onSubmit = handleSubmit(async ({ title, description }: IFormData) => {
    try {
      const { data } = await TodoService.createTodo({
        user_id: user.id,
        title,
        description,
      });

      dispatchTodos(createTodoAction(data));

      onCloseModal();

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
  });

  return (
    <S.Wrapper>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Título</label>
        <Input
          id="title"
          type="text"
          error={errors.title?.message}
          autoFocus
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

export default FormCreateTodo;
