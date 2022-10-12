import { TTodo } from 'services/TodoService/interfaces';

import { Action } from './utils/actions';

export interface ITodosContext {
  todos: TTodo[];
  dispatchTodos: React.Dispatch<Action>;
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
