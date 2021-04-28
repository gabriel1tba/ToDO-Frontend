import { useState, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';

import { FaEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlineHourglass } from 'react-icons/ai';

import * as S from './styles';

import Input from '../../../../Input';
import TextArea from '../../../../TextArea';

import { useToast } from '../../../../../hooks/toast';
import { useTodos } from '../../../../../hooks/todos';

import api from '../../../../../services/api';

import getValidationErros from '../../../../../utils/getValidationErros';

import { schema } from './schema';

import { IFormData, IManageTodo } from '../../../interfaces';

const ManageTodo = ({
  showTodo,
  editTodo,
  todo,
  handleCloseModal,
}: IManageTodo) => {
  const { addToast } = useToast();
  const { updateTodos, deleteTodo } = useTodos();

  const formRef = useRef({} as FormHandles);

  const [buttonLoading, setButtonLoading] = useState(false);

  const formattedTimestamp = useCallback((timeStamp: string) => {
    return new Date(timeStamp).toLocaleString('pt-BR', {
      // Time Zone de -7 horas
      timeZone: 'America/Cambridge_Bay',
    });
  }, []);

  const handleSubmit = useCallback(
    async (formData: IFormData) => {
      setButtonLoading(true);

      try {
        formRef.current.setErrors({});

        await schema.validate(formData, {
          abortEarly: false,
        });

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

        editTodo ? updateTodos(data) : deleteTodo(todo);

        addToast({
          type: 'success',
          title: editTodo ? 'Atualizado com sucesso!' : 'Removido com sucesso!',
          secondsDuration: 3,
        });
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErros(error);

          formRef.current.setErrors(errors);

          setButtonLoading(false);

          return;
        }

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
    [addToast, deleteTodo, editTodo, handleCloseModal, todo, updateTodos],
  );

  return (
    <S.Wrapper>
      <Form
        initialData={{ title: todo.title, description: todo.description }}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <label htmlFor="title">Título</label>
        <Input
          name="title"
          type="text"
          readOnly={showTodo || !editTodo}
          style={{ pointerEvents: showTodo || !editTodo ? 'none' : 'all' }}
        />

        <label htmlFor="description">Descrição</label>
        <TextArea
          rows={4}
          name="description"
          readOnly={showTodo || !editTodo}
          style={{ pointerEvents: showTodo || !editTodo ? 'none' : 'all' }}
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
              <IoCloseSharp size={20} color="#FFF" /> Fechar
            </button>
          ) : editTodo ? (
            <button style={{ backgroundColor: '#007bff' }} type="submit">
              {buttonLoading ? (
                <>
                  <AiOutlineHourglass size={15} color="#FFF" /> Carregando...
                </>
              ) : (
                <>
                  <FaEdit size={15} color="#FFF" /> Salvar alterações
                </>
              )}
            </button>
          ) : (
            <button style={{ backgroundColor: '#dc3545' }} type="submit">
              {buttonLoading ? (
                <>
                  <AiOutlineHourglass size={15} color="#FFF" /> Carregando...
                </>
              ) : (
                <>
                  <BsTrash size={15} color="#FFF" /> Excluir tarefa
                </>
              )}
            </button>
          )}
        </S.Footer>
      </Form>
    </S.Wrapper>
  );
};

export default ManageTodo;
