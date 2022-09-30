export type TUser = {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

export interface ICreateUserRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ICreateUserResponse {
  data: TUser;
}

export interface ILoginUserRequest {
  email: string;
  password: string;
}

export interface ILoginUserResponse {
  data: {
    user: TUser;
    token: string;
  };
}

export interface IUserService {
  createUser({
    name,
    email,
    password,
    confirmPassword,
  }: ICreateUserRequest): Promise<ICreateUserResponse>;

  createUserSession({
    email,
    password,
  }: ILoginUserRequest): Promise<ILoginUserResponse>;
}
