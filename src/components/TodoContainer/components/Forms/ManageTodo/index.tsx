import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlineHourglass } from 'react-icons/ai';

import * as S from './styles';

import { Input } from 'components/Input';
import { TextArea } from 'components/TextArea';

import { useToast } from 'hooks/toast';
import useTodos from 'hooks/todos';

import api from 'services/api';

import { schema } from './schema';

import { IFormData, IManageTodo } from '../../../interfaces';
import { ActionType } from 'hooks/todos/actions';

const ManageTodo = ({
  showTodo,
  editTodo,
  todo,
  handleCloseModal,
}: IManageTodo) => {
  const { register, handleSubmit, errors } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const { addToast } = useToast();
  const { todoDispatch } = useTodos();

  const [buttonLoading, setButtonLoading] = useState(false);

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
      setButtonLoading(true);

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

      setButtonLoading(false);
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
            <button
              type="button"
              style={{
                backgroundColor: '#007bff',
              }}
              onClick={handleCloseModal}
            >
              <IoCloseSharp size={20} /> Fechar
            </button>
          ) : editTodo ? (
            <button style={{ backgroundColor: '#007bff' }} type="submit">
              {buttonLoading ? (
                <>
                  <AiOutlineHourglass size={15} /> Carregando...
                </>
              ) : (
                <>
                  <FaEdit size={15} /> Salvar alterações
                </>
              )}
            </button>
          ) : (
            <button style={{ backgroundColor: '#dc3545' }} type="submit">
              {buttonLoading ? (
                <>
                  <AiOutlineHourglass size={15} /> Carregando...
                </>
              ) : (
                <>
                  <BsTrash size={15} /> Confirmar exclusão
                </>
              )}
            </button>
          )}
        </S.Footer>
      </form>
    </S.Wrapper>
  );
};

export default ManageTodo;
