import { ActionType, TodoActions } from './actions';
import { ITodo } from './interfaces';

const todoReducer = (state: ITodo[], action: TodoActions): ITodo[] => {
  switch (action.type) {
    case ActionType.GetTodos: {
      return action.payload.sort(
        (a: ITodo, b: ITodo) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
      );
    }

    case ActionType.CreateTodo: {
      return [...state, action.payload];
    }

    case ActionType.UpdateTodo: {
      return state
        .sort(
          (a: ITodo, b: ITodo) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
        )
        .map((todo) => {
          if (action.payload.id === todo.id) {
            todo = action.payload;
          }
          return todo;
        });
    }

    case ActionType.DeleteTodo: {
      return state
        .filter((todo) => {
          return todo !== action.payload;
        })
        .sort(
          (a: ITodo, b: ITodo) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
        );
    }

    default:
      return state;
  }
};

export default todoReducer;
