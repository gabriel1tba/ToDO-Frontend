import * as S from './styles';

import { useTodos } from '../../hooks/todos';

const Aside = () => {
  const { todos } = useTodos();

  return (
    <S.Wrapper>
      <S.InputSearch placeholder="Pesquisar tarefas..." />
    </S.Wrapper>
  );
};

export default Aside;
