import * as S from './styles';

import { useTodos } from '../../hooks/todos';

const Aside = () => {
  const { todos } = useTodos();

  return (
    <S.Wrapper>
      <S.InputSearch placeholder="Pesquisar tarefas..." />

      <S.BadgeContainer>
        <span
          style={{
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            color: '#3498db',
          }}
        >
          Tarefas totais {todos.length ?? 0}
        </span>
        <span
          style={{
            backgroundColor: 'rgba(46, 204, 113, 0.2)',
            color: '#2ecc71',
          }}
        >
          Tarefas concluídas{' '}
          {todos
            .map((todo) => Number(todo.completed), 0)
            .reduce((count, currentPrice) => count + currentPrice, 0)}
        </span>
        <span
          style={{ backgroundColor: 'rgba(231, 76, 60,0.2)', color: '#e74c3c' }}
        >
          Tarefas pendentes{' '}
          {todos.length -
            todos
              .map((todo) => Number(todo.completed), 0)
              .reduce((count, currentPrice) => count + currentPrice, 0) ?? 0}
        </span>
      </S.BadgeContainer>
    </S.Wrapper>
  );
};

export default Aside;
