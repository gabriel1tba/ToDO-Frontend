import { ITodo } from 'interfaces';

import { TodoActions } from './utils/actions';

export interface IHomeContext {
  todos: ITodo[];
  todoDispatch: React.Dispatch<TodoActions>;
}

export interface ITodoItem {
  todo: ITodo;
}
export interface IFormData {
  title: string;
  description: string;
}

export interface ICreateTodo {
  onCloseModal: () => void;
}

export interface IEditTodo {
  onCloseModal: () => void;
  todo: ITodo;
}
