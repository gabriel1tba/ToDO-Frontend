import { TTodo } from 'services/TodoService/interfaces';

export enum ActionType {
  GetTodos,
  CreateTodo,
  UpdateTodo,
  DeleteTodo,
}

export interface GetTodos {
  type: ActionType.GetTodos;
  payload: TTodo[];
}
export interface CreateTodo {
  type: ActionType.CreateTodo;
  payload: TTodo;
}

export interface UpdateTodo {
  type: ActionType.UpdateTodo;
  payload: TTodo;
}

export interface DeleteTodo {
  type: ActionType.DeleteTodo;
  payload: TTodo;
}

export type TodoActions = GetTodos | CreateTodo | UpdateTodo | DeleteTodo;
