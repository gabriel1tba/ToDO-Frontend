import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import * as S from './styles';

const Todo = () => {
  return (
    <S.Wrapper>
      <input type="checkbox" name="completed" id="completed" />

      <a onClick={() => alert('opa')}>Criar teste</a>

      <div>
        <FaEdit size={20} color="#2ecc71" />
        <FaTrashAlt size={20} color="#e74c3c" />
      </div>
    </S.Wrapper>
  );
};

export default Todo;
