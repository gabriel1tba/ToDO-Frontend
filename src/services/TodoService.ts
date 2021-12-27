import { AxiosInstance } from 'axios';

import { ITodo } from 'interfaces';

import HttpClient from './utils/HttpClient';

class TodoService {
  private _httpClient: AxiosInstance;

  constructor() {
    this._httpClient = HttpClient;
  }

  async getTodos({ id }: Pick<Partial<ITodo>, 'id'>) {
    return await this._httpClient.get(`todos/${id}`);
  }

  async createTodo({ user_id, title, description }: Partial<ITodo>) {
    return await this._httpClient.post('todos', {
      user_id,
      title,
      description,
    });
  }

  async updateTodo({ id, title, completed, description }: Partial<ITodo>) {
    return await this._httpClient.patch('todos', {
      id,
      title,
      description,
      completed,
    });
  }

  async deleteTodo({ id }: Pick<Partial<ITodo>, 'id'>) {
    return await this._httpClient.delete('todos', {
      data: {
        id,
      },
    });
  }
}

export default new TodoService();
