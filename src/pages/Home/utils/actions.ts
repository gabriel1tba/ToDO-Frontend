import { TTodo } from 'services/TodoService/interfaces';

export enum ActionTypes {
  GET_TODOS = 'GET_TODOS',
  CREATE_TODO = 'CREATE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

interface GetTodos {
  type: ActionTypes.GET_TODOS;
  payload: TTodo[];
}

interface CreateTodo {
  type: ActionTypes.CREATE_TODO;
  payload: TTodo;
}

interface UpdateTodo {
  type: ActionTypes.UPDATE_TODO;
  payload: TTodo;
}

interface DeleteTodo {
  type: ActionTypes.DELETE_TODO;
  payload: string;
}

export type Actions = GetTodos | CreateTodo | UpdateTodo | DeleteTodo;

export const getTodosAction = (todos: TTodo[]): GetTodos => ({
  type: ActionTypes.GET_TODOS,
  payload: todos,
});

export const createTodoAction = (todo: TTodo): CreateTodo => ({
  type: ActionTypes.CREATE_TODO,
  payload: todo,
});

export const updateTodoAction = (todo: TTodo): UpdateTodo => ({
  type: ActionTypes.UPDATE_TODO,
  payload: todo,
});

export const deleteTodoAction = (id: string): DeleteTodo => ({
  type: ActionTypes.DELETE_TODO,
  payload: id,
});
