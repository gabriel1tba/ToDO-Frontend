import { ValidationError } from 'yup';

type Errors = {
  [key: string]: string;
};

export default function getValidationErros(error: ValidationError): Errors {
  const validationErrors: Errors = {};

  error.inner.forEach((err) => {
    if (typeof err.path === 'string') validationErrors[err.path] = err.message;
  });

  return validationErrors;
}
