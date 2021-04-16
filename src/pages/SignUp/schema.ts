import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório!'),
  email: Yup.string()
    .required('E-mail obrigatório!')
    .email('Digite um e-mail válido!'),
  password: Yup.string().min(8, 'Mínimo 8 caracteres!'),
  passwordConfirmation: Yup.string()
    .required('Confirme sua senha')
    .oneOf([Yup.ref('password'), null], 'As senhas não são iguais'),
});
