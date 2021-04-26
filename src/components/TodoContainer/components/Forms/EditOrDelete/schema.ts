import * as Yup from 'yup';

export const schema = Yup.object().shape({
  descriptions: Yup.string().required('Titulo obrigatório!'),
  title: Yup.string(),
});
