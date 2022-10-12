import { TTodo } from 'services/TodoService/interfaces';

export enum Types {
  GET_TODOS = 'GET_TODOS',
  CREATE_TODO = 'CREATE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

interface GetTodos {
  type: Types.GET_TODOS;
  payload: TTodo[];
}

interface CreateTodo {
  type: Types.CREATE_TODO;
  payload: TTodo;
}

interface UpdateTodo {
  type: Types.UPDATE_TODO;
  payload: TTodo;
}

interface DeleteTodo {
  type: Types.DELETE_TODO;
  payload: string;
}

export type Action = GetTodos | CreateTodo | UpdateTodo | DeleteTodo;

export const getTodosAction = (todos: TTodo[]): GetTodos => ({
  type: Types.GET_TODOS,
  payload: todos,
});

export const createTodoAction = (todo: TTodo): CreateTodo => ({
  type: Types.CREATE_TODO,
  payload: todo,
});

export const updateTodoAction = (todo: TTodo): UpdateTodo => ({
  type: Types.UPDATE_TODO,
  payload: todo,
});

export const deleteTodoAction = (id: string): DeleteTodo => ({
  type: Types.DELETE_TODO,
  payload: id,
});
