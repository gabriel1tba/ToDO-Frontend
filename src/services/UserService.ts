import { AxiosInstance } from 'axios';

import HttpClient from './utils/HttpClient';

import {
  ICredentials,
  ICredentialsRegister,
  IUserService,
  ICreateUserResponse,
  ICreateUserSessionResponse,
} from 'interfaces';

class UserService implements IUserService {
  private _httpClient: AxiosInstance;

  constructor() {
    this._httpClient = HttpClient;
  }

  async createUser(
    credentialsRegister: ICredentialsRegister
  ): Promise<ICreateUserResponse> {
    return await this._httpClient.post('user', credentialsRegister);
  }

  async createUserSession(
    credentials: ICredentials
  ): Promise<ICreateUserSessionResponse> {
    return await this._httpClient.post('auth', credentials);
  }
}

export default new UserService();
