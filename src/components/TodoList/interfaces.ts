import { ITodo } from 'interfaces';

export interface IFormData {
  title: string;
  description: string;
}

export interface IManageTodo {
  todo: ITodo;
  onCloseModal: () => void;
  editTodo: boolean;
  showTodo: boolean;
}
