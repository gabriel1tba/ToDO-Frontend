import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiPlus } from 'react-icons/fi';

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
  const { register, handleSubmit, errors, formState } = useForm<IFormData>({
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
          name="title"
          type="text"
          error={errors.title?.message}
          ref={register}
        />

        <label htmlFor="description">Descrição</label>
        <TextArea
          rows={4}
          id="description"
          name="description"
          error={errors.description?.message}
          ref={register}
        />

        <S.Footer>
          <Button
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
