import { AxiosInstance } from 'axios';
import {
  ICreateOrUpdateTodoResponse,
  IDeleteTodo,
  IGetTodoResponse,
  ITodoService,
  TTodoService,
} from 'interfaces';

import HttpClient from './utils/HttpClient';

class TodoService implements ITodoService {
  private _httpClient: AxiosInstance;

  constructor() {
    this._httpClient = HttpClient;
  }

  async getTodos({ id }: Pick<TTodoService, 'id'>): Promise<IGetTodoResponse> {
    return await this._httpClient.get(`todos/${id}`);
  }

  async createTodo({
    user_id,
    title,
    description,
  }: Omit<
    TTodoService,
    'id' | 'completed'
  >): Promise<ICreateOrUpdateTodoResponse> {
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
  }: Omit<TTodoService, 'user_id'>): Promise<ICreateOrUpdateTodoResponse> {
    return await this._httpClient.patch('todos', {
      id,
      title,
      description,
      completed,
    });
  }

  async deleteTodo({ id }: Pick<TTodoService, 'id'>): Promise<IDeleteTodo> {
    return await this._httpClient.delete('todos', {
      data: {
        id,
      },
    });
  }
}

export default new TodoService();
