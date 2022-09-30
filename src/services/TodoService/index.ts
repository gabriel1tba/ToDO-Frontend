import { AxiosInstance } from 'axios';
import {
  ITodoService,
  ICreateTodoResponse,
  IUpdateTodoResponse,
  IDeleteTodoResponse,
  IGetTodoResponse,
  TTodo,
} from './interfaces';

import HttpClient from '../utils/HttpClient';

class TodoService implements ITodoService {
  private _httpClient: AxiosInstance;

  constructor() {
    this._httpClient = HttpClient;
  }

  async getTodos({ id }: Pick<TTodo, 'id'>): Promise<IGetTodoResponse> {
    return await this._httpClient.get(`todos/${id}`);
  }

  async createTodo({
    user_id,
    title,
    description,
  }: Omit<
    TTodo,
    'id' | 'completed' | 'created_at' | 'updated_at'
  >): Promise<ICreateTodoResponse> {
    return await this._httpClient.post('todos', {
      user_id,
      title,
      description,
    });
  }

  async updateTodo({
    id,
    title,
    completed,
    description,
  }: Omit<
    TTodo,
    'user_id' | 'created_at' | 'updated_at'
  >): Promise<IUpdateTodoResponse> {
    return await this._httpClient.patch('todos', {
      id,
      title,
      description,
      completed,
    });
  }

  async deleteTodo({ id }: Pick<TTodo, 'id'>): Promise<IDeleteTodoResponse> {
    return await this._httpClient.delete('todos', {
      data: {
        id,
      },
    });
  }
}

export default new TodoService();
