import { TTodo } from 'services/TodoService/interfaces';

import { TodoActions } from './utils/actions';

export interface IHomeContext {
  todos: TTodo[];
  todoDispatch: React.Dispatch<TodoActions>;
}

export interface ITodoItem {
  todo: TTodo;
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
  todo: TTodo;
}
