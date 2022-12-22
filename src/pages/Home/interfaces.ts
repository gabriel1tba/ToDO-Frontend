import { TTodo } from 'services/TodoService/interfaces';

import { Actions } from './utils/actions';

export interface ITodosContext {
  todos: TTodo[];
  dispatchTodos: React.Dispatch<Actions>;
}

export interface ITodoItem {
  todo: TTodo;
  onEditTodoModal?: (todo: TTodo) => void;
  onOpenAlert?: (todo: TTodo) => void;
}
export interface IFormData {
  title: string;
  description: string;
}

export interface IFormTodo {
  onCloseModal: () => void;
}

export interface IFormEditTodo extends IFormTodo {
  todo: TTodo;
}
