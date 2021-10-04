import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';

import * as S from './styles';

import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

import { useToast } from 'hooks/toast';
import useTodos from 'hooks/todos';

import api from 'services/api';

import { schema } from './schema';

import { IFormData, IManageTodo } from '../../../interfaces';
import { ActionType } from 'context/todos/actions';

const ManageTodo = ({
  showTodo,
  editTodo,
  todo,
  handleCloseModal,
}: IManageTodo) => {
  const { register, handleSubmit, errors, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const { addToast } = useToast();
  const { todoDispatch } = useTodos();

  const formattedTimestamp = (timeStamp: string) => {
    return new Date(timeStamp).toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    });
  };

  // State to useEffect cleanup function
  const [, setDidMount] = useState(false);

  // useEffect cleanup function
  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  const onSubmit = useCallback(
    async (formData: IFormData) => {
      try {
        const { data } = editTodo
          ? await api.patch('/todos', {
              id: todo.id,
              title: formData.title,
              description: formData.description,
            })
          : await api.delete('/todos', {
              data: {
                id: todo.id,
              },
            });

        editTodo
          ? todoDispatch({ type: ActionType.UpdateTodo, payload: data })
          : todoDispatch({ type: ActionType.DeleteTodo, payload: todo });

        addToast({
          type: 'success',
          title: editTodo ? 'Atualizado com sucesso!' : 'Removido com sucesso!',
          secondsDuration: 3,
        });
      } catch {
        addToast({
          type: 'error',
          title: 'Erro ao tentar executar ação!',
          description:
            'Um erro inesperado aconteceu... Tente novamente mais tarde.',
          secondsDuration: 5,
        });
      }

      handleCloseModal();
    },
    [addToast, editTodo, handleCloseModal, todo, todoDispatch],
  );

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Título</label>
        <Input
          name="title"
          type="text"
          readOnly={showTodo || !editTodo}
          style={{ pointerEvents: showTodo || !editTodo ? 'none' : 'all' }}
          error={errors.title?.message}
          ref={register}
          defaultValue={todo.title}
        />

        <label htmlFor="description">Descrição</label>
        <TextArea
          rows={4}
          name="description"
          readOnly={showTodo || !editTodo}
          style={{ pointerEvents: showTodo || !editTodo ? 'none' : 'all' }}
          error={errors.description?.message}
          ref={register}
          defaultValue={todo.description ?? ''}
        />

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
          {showTodo ? (
            <Button
              background="#007bff"
              icon={<IoCloseSharp size={20} />}
              onClick={handleCloseModal}
            >
              Fechar
            </Button>
          ) : editTodo ? (
            <Button
              background="#007bff"
              type="submit"
              icon={<FaEdit size={15} />}
              loading={formState.isSubmitting}
            >
              Salvar alterações
            </Button>
          ) : (
            <Button
              background="#dc3545"
              type="submit"
              icon={<BsTrash size={15} />}
              loading={formState.isSubmitting}
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
