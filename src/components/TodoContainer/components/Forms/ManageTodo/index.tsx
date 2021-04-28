import { useState, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';
import { FaEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';

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
  const { updateTodos } = useTodos();

  const formRef = useRef({} as FormHandles);

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmit = useCallback(
    async (formData: IFormData) => {
      setButtonLoading(true);

      try {
        formRef.current.setErrors({});

        await schema.validate(formData, {
          abortEarly: false,
        });

        const { data } = await api.patch('/todos', {
          id: todo.id,
          title: formData.title,
          description: formData.description,
        });

        updateTodos(data);

        addToast({
          type: 'success',
          title: 'Atualizado com sucesso!',
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
          title: 'Erro ao tentar atualizar!',
          description:
            'Um erro inesperado aconteceu... Tente novamente mais tarde.',
          secondsDuration: 5,
        });
      }

      setButtonLoading(false);
      handleCloseModal();
    },
    [addToast, handleCloseModal, todo.id, updateTodos],
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
          readOnly={showTodo || !editTodo}
          name="title"
          type="text"
          style={{ pointerEvents: showTodo || !editTodo ? 'none' : 'all' }}
        />

        <label htmlFor="description">Descrição</label>
        <TextArea
          readOnly={showTodo || !editTodo}
          rows={4}
          name="description"
          style={{ pointerEvents: showTodo || !editTodo ? 'none' : 'all' }}
        />
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
                  <FaEdit size={15} color="#FFF" /> Carregando...
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
                  <BsTrash size={15} color="#FFF" /> Carregando...
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
