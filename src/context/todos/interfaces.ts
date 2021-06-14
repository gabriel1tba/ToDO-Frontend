import { TodoActions } from '../../hooks/todos/actions';

export interface ITodo {
  id: string;
  user_id: string;
  completed: boolean;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface ITodoContext {
  todos: ITodo[];
  getTodosFromDB: () => void;
  todoDispatch: React.Dispatch<TodoActions>;
  getSearchedWord: (word: string) => void;
  filteredTodos: ITodo[];
}

export interface ITodoProvider {
  children: React.ReactNode;
}
