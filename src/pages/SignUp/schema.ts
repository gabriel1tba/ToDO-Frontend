import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório!'),
  email: Yup.string()
    .required('E-mail obrigatório!')
    .email('Digite um e-mail válido!'),
  password: Yup.string()
    .required('Senha obrigatória')
    .min(8, 'Mínimo 8 caracteres!'),
  confirmPassword: Yup.string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([Yup.ref('password'), null], 'As senhas não são iguais'),
});
