import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as S from './styles';

import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

import { useToast, useTodos } from 'hooks';

import TodoService from 'services/TodoService';

import { schema } from './schema';

import { ActionType } from 'context/todos/actions';

import { IFormData, IEditTodo } from '../../interfaces';

const EditTodo = ({ todo, onCloseModal }: IEditTodo) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const { addToast } = useToast();
  const { todoDispatch } = useTodos();

  const [, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await TodoService.updateTodo({
        id: todo.id,
        title: formData.title,
        description: formData.description,
      });

      todoDispatch({ type: ActionType.UpdateTodo, payload: data });

      addToast({
        type: 'success',
        title: 'Atualizado com sucesso!',
        secondsDuration: 3,
      });

      onCloseModal();
    } catch {
      addToast({
        type: 'error',
        title: 'Erro ao tentar executar ação!',
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
          defaultValue={todo.title}
          {...register('title')}
        />

        <label htmlFor="description">Descrição</label>
        <TextArea
          rows={4}
          id="description"
          error={errors.description?.message}
          defaultValue={todo.description ?? ''}
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

export default EditTodo;
