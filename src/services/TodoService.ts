import { AxiosInstance } from 'axios';
import HttpClient from './utils/HttpClient';

export interface ITodoService {
  id?: string;
  user_id?: string;
  title: string;
  description?: string | null;
  completed?: boolean;
}

class TodoService {
  private _httpClient: AxiosInstance;

  constructor() {
    this._httpClient = HttpClient;
  }

  async createTodo({ user_id, title, description }: ITodoService) {
    return await this._httpClient.post('todos', {
      user_id,
      title,
      description,
    });
  }

  async getTodos({ id }: Pick<ITodoService, 'id'>) {
    return await this._httpClient.get(`todos/${id}`);
  }

  async updateTodo({ id, title, completed, description }: ITodoService) {
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
