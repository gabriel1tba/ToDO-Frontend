import { ITodo } from 'interfaces';

import { TodoActions } from './actions';

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
