import { ICredentials, IUser } from 'interfaces';

export interface IAuthState {
  token: string;
  user: IUser;
}

export interface IAuthContext {
  user: IUser;
  signIn: (crendentials: ICredentials) => Promise<void>;
  signOut: () => void;
}

export interface IAuthProvider {
  children: React.ReactNode;
}
