import * as S from './styles';

import { useTodos } from '../../hooks/todos';
import Badge from '../Badge';

const Aside = () => {
  const { todos } = useTodos();

  return (
    <S.Wrapper>
      <S.InputSearch placeholder="Pesquisar tarefas..." />

      <div>
        <Badge
          title="Tarefas Totais"
          unit={todos.length ?? 0}
          fontColor="#3498db"
          rgbaBackground="rgba(52, 152, 219, 0.2)"
        />
        <Badge
          title="Tarefas concluídas"
          unit={todos
            .map((todo) => Number(todo.completed), 0)
            .reduce((count, currentPrice) => count + currentPrice, 0)}
          fontColor="#2ecc71"
          rgbaBackground="rgba(46, 204, 113, 0.2)"
        />
        <Badge
          title="Tarefas pendentes"
          unit={todos
            .map((todo) => Number(!todo.completed), 0)
            .reduce((count, currentPrice) => count + currentPrice, 0)}
          fontColor="#e74c3c"
          rgbaBackground="rgba(231, 76, 60,0.2)"
        />
      </div>
    </S.Wrapper>
  );
};

export default Aside;
