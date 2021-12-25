import { ICredentials } from './Credentials';

export interface ICredentialsRegister extends ICredentials {
  name: string;
  confirmPassword: string;
}
