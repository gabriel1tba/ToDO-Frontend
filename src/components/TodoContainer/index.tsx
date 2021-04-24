import { BiListPlus } from 'react-icons/bi';
import * as S from './styles';

import Todo from './Todo';

const TodoContainer = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <span
          style={{
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            color: '#3498db',
          }}
        >
          Total 5
        </span>
        <span
          style={{
            backgroundColor: 'rgba(46, 204, 113, 0.2)',
            color: '#2ecc71',
          }}
        >
          Concluídos 3
        </span>
        <span
          style={{ backgroundColor: 'rgba(231, 76, 60,0.2)', color: '#e74c3c' }}
        >
          Pendentes 2
        </span>
      </S.Header>

      <S.InputSearch placeholder="Pesquise uma tarefa" />

      <S.TodoWrapper>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </S.TodoWrapper>
      <button>
        <BiListPlus size={30} color="#fff" /> Nova tarefa
      </button>
    </S.Wrapper>
  );
};

export default TodoContainer;
