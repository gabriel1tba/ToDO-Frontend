import { AxiosInstance } from 'axios';

import { ITodo } from 'interfaces';

import HttpClient from './utils/HttpClient';

type ITodoService = Partial<Omit<ITodo, 'created_at' | 'updated_at'>>;

class TodoService {
  private _httpClient: AxiosInstance;

  constructor() {
    this._httpClient = HttpClient;
  }

  async getTodos({ id }: Pick<ITodoService, 'id'>) {
    return await this._httpClient.get(`todos/${id}`);
  }

  async createTodo({
    user_id,
    title,
    description,
  }: Omit<ITodoService, 'id' | 'completed'>) {
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
  }: Omit<ITodoService, 'user_id'>) {
    return await this._httpClient.patch('todos', {
      id,
      title,
      description,
      completed,
    });
  }

  async deleteTodo({ id }: Pick<ITodoService, 'id'>) {
    return await this._httpClient.delete('todos', {
      data: {
        id,
      },
    });
  }
}

export default new TodoService();
