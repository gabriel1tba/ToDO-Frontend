import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';

import * as S from './styles';

import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

import { useToast, useTodos } from 'hooks';

import TodoService from 'services/TodoService';

import { schema } from './schema';

import { ActionType } from 'context/todos/actions';

import { IFormData, IManageTodo } from '../../../interfaces';

const ManageTodo = ({
  showTodo,
  editTodo,
  todo,
  onCloseModal,
}: IManageTodo) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const { addToast } = useToast();
  const { todoDispatch } = useTodos();

  // State to useEffect cleanup function
  const [, setDidMount] = useState(false);

  const formattedTimestamp = (timeStamp: string) => {
    return new Date(timeStamp).toLocaleDateString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    });
  };

  // useEffect cleanup function
  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  const onSubmit = async (formData: IFormData) => {
    try {
      if (editTodo) {
        const { data } = await TodoService.updateTodo({
          id: todo.id,
          title: formData.title,
          description: formData.description,
        });

        todoDispatch({ type: ActionType.UpdateTodo, payload: data });
      } else if (!editTodo) {
        await TodoService.deleteTodo({
          id: todo.id,
        });

        todoDispatch({ type: ActionType.DeleteTodo, payload: todo });
      }

      addToast({
        type: 'success',
        title: editTodo ? 'Atualizado com sucesso!' : 'Removido com sucesso!',
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
          readOnly={showTodo || !editTodo}
          style={{ pointerEvents: showTodo || !editTodo ? 'none' : 'all' }}
          error={errors.title?.message}
          {...register('title')}
          defaultValue={todo.title}
        />

        <label htmlFor="description">Descrição</label>
        <TextArea
          rows={4}
          id="description"
          readOnly={showTodo || !editTodo}
          style={{ pointerEvents: showTodo || !editTodo ? 'none' : 'all' }}
          error={errors.description?.message}
          {...register('description')}
          defaultValue={todo.description ?? ''}
        />

        <S.TimeWrapper style={{ marginTop: '30px' }}>
          <div>
            <strong>Criado em: </strong>
            <small>{formattedTimestamp(todo.created_at)}</small>
          </div>

          <div>
            <strong>Atualizado em: </strong>
            <small>{formattedTimestamp(todo.updated_at)}</small>
          </div>
        </S.TimeWrapper>
        <S.Footer>
          {showTodo ? (
            <Button icon={<IoCloseSharp size={20} />} onClick={onCloseModal}>
              Fechar
            </Button>
          ) : editTodo ? (
            <Button
              type="submit"
              icon={<FaEdit size={15} />}
              loading={isSubmitting}
            >
              Salvar alterações
            </Button>
          ) : (
            <Button
              color="danger"
              type="submit"
              icon={<BsTrash size={15} />}
              loading={isSubmitting}
            >
              Confirmar exclusão
            </Button>
          )}
        </S.Footer>
      </form>
    </S.Wrapper>
  );
};

export default ManageTodo;
