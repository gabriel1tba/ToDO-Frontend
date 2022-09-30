export type TTodo = {
  id: string;
  user_id: string;
  completed?: boolean;
  title: string;
  description?: string;
  created_at: string;
  updated_at: string;
};

export interface IGetTodoResponse {
  data: TTodo[];
}

export interface ICreateTodoResponse {
  data: TTodo;
}

export interface IUpdateTodoResponse {
  data: TTodo;
}

export interface IDeleteTodoResponse {
  data: {
    message: string;
  };
}

export interface ITodoService {
  getTodos({ id }: Pick<TTodo, 'id'>): Promise<IGetTodoResponse>;

  createTodo({
    user_id,
    title,
    description,
  }: Omit<TTodo, 'id' | 'completed'>): Promise<ICreateTodoResponse>;

  updateTodo({
    id,
    title,
    completed,
    description,
  }: Omit<TTodo, 'user_id'>): Promise<IUpdateTodoResponse>;

  deleteTodo({ id }: Pick<TTodo, 'id'>): Promise<IDeleteTodoResponse>;
}
