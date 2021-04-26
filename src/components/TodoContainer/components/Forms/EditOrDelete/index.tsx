import { useState, useCallback, useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';
import { FiMail } from 'react-icons/fi';

import getValidationErros from '../../../../../utils/getValidationErros';

import Input from '../../../../Input';

import { useToast } from '../../../../../hooks/toast';

interface ISignInFormData {
  email: string;
  password: string;
}

const EditOrDelete = () => {
  const { addToast } = useToast();

  const formRef = useRef({} as FormHandles);

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      setButtonLoading(true);

      setTimeout(() => {
        setButtonLoading(false);
      }, 1000);

      try {
        formRef.current.setErrors({});

        console.log(data);
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErros(error);

          formRef.current.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao tentar logar!',
          description:
            'Um erro inesperado aconteceu... Tente novamente mais tarde.',
          secondsDuration: 5,
        });
      }
    },
    [addToast],
  );

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
      <button type="submit">Editar</button>tton
    </Form>
  );
};

export default EditOrDelete;
