import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório!'),
  email: Yup.string()
    .required('E-mail obrigatório!')
    .email('Digite um e-mail válido!'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres!'),
});
