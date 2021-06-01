import { ITodo } from './interfaces';

export enum ActionType {
  CreateTodo,
  UpdateTodo,
  DeleteTodo,
}

export interface CreateTodo {
  type: ActionType.CreateTodo;
  payload: ITodo;
}

export interface UpdateTodo {
  type: ActionType.UpdateTodo;
  payload: ITodo;
}

export interface DeleteTodo {
  type: ActionType.DeleteTodo;
  payload: ITodo;
}

export type TodoActions = CreateTodo | UpdateTodo | DeleteTodo;
