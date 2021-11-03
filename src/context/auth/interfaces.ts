export interface ISignInCrendentials {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
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
