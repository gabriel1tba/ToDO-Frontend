import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import * as S from './styles';

type Todo = {
  id: string;
  user_id: string;
  completed: boolean;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
};

interface ITodo {
  todo: Todo;
}

const Todo = ({ todo }: ITodo) => {
  return (
    <S.Wrapper>
      <input
        defaultChecked={todo.completed}
        type="checkbox"
        name="completed"
        id="completed"
      />

      <a onClick={() => alert('opa')}>{todo.title}</a>

      <div>
        <FaEdit size={20} color="#2ecc71" />
        <FaTrashAlt size={20} color="#e74c3c" />
      </div>
    </S.Wrapper>
  );
};

export default Todo;
