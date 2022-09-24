import { ITodo } from 'interfaces';

import { TodoActions } from './actions';

export interface ITodoContext {
  todos: ITodo[];
  todoDispatch: React.Dispatch<TodoActions>;
}

export interface ITodoProvider {
  children: React.ReactNode;
}
