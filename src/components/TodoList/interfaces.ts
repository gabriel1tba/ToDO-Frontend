import { ITodo } from 'interfaces';

export interface ITodoItem {
  todo: ITodo;
}
export interface IFormData {
  title: string;
  description: string;
}

export interface INewTodo {
  onCloseModal: () => void;
}

export interface IManageTodo {
  onCloseModal: () => void;
  todo: ITodo;
  editTodo: boolean;
  showTodo: boolean;
}
