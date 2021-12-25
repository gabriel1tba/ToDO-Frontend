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
  todo: ITodo;
  onCloseModal: () => void;
  editTodo: boolean;
  showTodo: boolean;
}
