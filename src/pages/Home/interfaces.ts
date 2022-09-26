import { ITodo } from 'interfaces';

import { TodoActions } from './utils/actions';

export interface IHomeContext {
  todos: ITodo[];
  todoDispatch: React.Dispatch<TodoActions>;
}
