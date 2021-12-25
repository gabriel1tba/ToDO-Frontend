import { IUser } from 'interfaces';

export interface ISignInCrendentials {
  email: string;
  password: string;
}

export interface IAuthState {
  token: string;
  user: IUser;
}

export interface IAuthContext {
  user: IUser;
  signIn: (crendentials: ISignInCrendentials) => Promise<void>;
  signOut: () => void;
}

export interface IAuthProvider {
  children: React.ReactNode;
}
