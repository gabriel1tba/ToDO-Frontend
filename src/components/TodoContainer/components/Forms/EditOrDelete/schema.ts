import * as Yup from 'yup';

export const schema = Yup.object().shape({
  title: Yup.string().required('Titulo é obrigatório!'),
  descriptions: Yup.string(),
});
