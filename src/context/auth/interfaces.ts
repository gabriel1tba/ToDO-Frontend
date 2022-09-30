import { ILoginUserRequest, TUser } from 'services/UserService/interfaces';

export interface IAuthState {
  token: string;
  user: TUser;
}

export interface IAuthContext {
  user: TUser;
  signIn: ({ email, password }: ILoginUserRequest) => Promise<void>;
  signOut: () => void;
}

export interface IAuthProvider {
  children: React.ReactNode;
}
