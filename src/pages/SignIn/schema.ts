import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório!')
    .email('Digite um e-mail válido!'),
  password: Yup.string().required('Senha obrigatória!'),
});
