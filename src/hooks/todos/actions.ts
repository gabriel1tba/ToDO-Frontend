import { ITodo } from '../../context/todos/interfaces';

export enum ActionType {
  GetTodos,
  CreateTodo,
  UpdateTodo,
  DeleteTodo,
}

export interface GetTodos {
  type: ActionType.GetTodos;
  payload: ITodo[];
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

export type TodoActions = GetTodos | CreateTodo | UpdateTodo | DeleteTodo;
