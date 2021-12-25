import { ITodo } from 'interfaces';

import { TodoActions } from './actions';

export interface ITodoContext {
  todos: ITodo[];
  searchTerm: string;
  todoDispatch: React.Dispatch<TodoActions>;
  getSearchTerm: (word: string) => void;
  filteredTodos: ITodo[];
}

export interface ITodoProvider {
  children: React.ReactNode;
}
