import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import TodoService from 'services/TodoService';

import { useToast } from 'hooks';
import { useTodos } from 'pages/Home';
import { updateTodoAction } from 'pages/Home/utils/actions';

import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

import { schema } from '../../utils/schema';

import * as S from './styles';

import { IFormData, IEditTodo } from '../../interfaces';

const EditTodo = ({ todo, onCloseModal }: IEditTodo) => {
  const [, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const { addToast } = useToast();
  const { dispatchTodos } = useTodos();

  const onSubmit = async ({ title, description }: IFormData) => {
    try {
      const { data } = await TodoService.updateTodo({
        id: todo.id,
        title,
        description,
      });

      dispatchTodos(updateTodoAction(data));

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
          autoFocus
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
