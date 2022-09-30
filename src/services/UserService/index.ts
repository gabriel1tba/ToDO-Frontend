import { AxiosInstance } from 'axios';

import HttpClient from '../utils/HttpClient';

import {
  IUserService,
  ICreateUserRequest,
  ICreateUserResponse,
  ILoginUserRequest,
  ILoginUserResponse,
} from './interfaces';

class UserService implements IUserService {
  private _httpClient: AxiosInstance;

  constructor() {
    this._httpClient = HttpClient;
  }

  async createUser(
    credentialsRegister: ICreateUserRequest
  ): Promise<ICreateUserResponse> {
    return await this._httpClient.post('user', credentialsRegister);
  }

  async createUserSession(
    credentials: ILoginUserRequest
  ): Promise<ILoginUserResponse> {
    return await this._httpClient.post('auth', credentials);
  }
}

export default new UserService();
