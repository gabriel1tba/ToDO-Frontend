export interface Item {
  id: string;
  user_id: string;
  completed: boolean;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface IFormData {
  title: string;
  description: string;
}

export interface IManageTodo {
  todo: Item;
  onCloseModal: () => void;
  editTodo: boolean;
  showTodo: boolean;
}
