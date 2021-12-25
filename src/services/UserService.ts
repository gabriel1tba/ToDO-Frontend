import { AxiosInstance } from 'axios';
import HttpClient from './utils/HttpClient';

import { ICredentials, ICredentialsRegister } from 'interfaces';

class UserService {
  private _httpClient: AxiosInstance;

  constructor() {
    this._httpClient = HttpClient;
  }

  async createUser(credentialsRegister: ICredentialsRegister) {
    return await this._httpClient.post('user', credentialsRegister);
  }

  async createUserSession(credentials: ICredentials) {
    return await this._httpClient.post('auth', credentials);
  }
}

export default new UserService();
