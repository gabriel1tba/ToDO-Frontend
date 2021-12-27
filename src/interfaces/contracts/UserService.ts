import { ICredentialsRegister, ICredentials, IUser } from 'interfaces';

export interface ICreateUserResponse {
  data: IUser;
}

export interface ICreateUserSessionResponse {
  data: {
    user: IUser;
    token: string;
  };
}

export interface IUserService {
  createUser(
    credentialsRegister: ICredentialsRegister,
  ): Promise<ICreateUserResponse>;

  createUserSession(
    credentials: ICredentials,
  ): Promise<ICreateUserSessionResponse>;
}
