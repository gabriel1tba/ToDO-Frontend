import { ITodo } from 'interfaces';

export type TTodoService = Partial<Omit<ITodo, 'created_at' | 'updated_at'>>;

export interface IGetTodoResponse {
  data: ITodo[];
}

export interface ICreateOrUpdateTodoResponse {
  data: ITodo;
}

export interface IDeleteTodo {
  data: {
    message: string;
  };
}

export interface ITodoService {
  getTodos({ id }: Pick<TTodoService, 'id'>): Promise<IGetTodoResponse>;

  createTodo({
    user_id,
    title,
    description,
  }: Omit<
    TTodoService,
    'id' | 'completed'
  >): Promise<ICreateOrUpdateTodoResponse>;

  updateTodo({
    id,
    title,
    completed,
    description,
  }: Omit<TTodoService, 'user_id'>): Promise<ICreateOrUpdateTodoResponse>;

  deleteTodo({ id }: Pick<TTodoService, 'id'>): Promise<IDeleteTodo>;
}
