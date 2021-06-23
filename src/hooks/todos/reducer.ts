import { ActionType, TodoActions } from './actions';
import { ITodo } from '../../context/todos/interfaces';

const todoReducer = (state: ITodo[], action: TodoActions): ITodo[] => {
  switch (action.type) {
    case ActionType.GetTodos: {
      return action.payload;
    }

    case ActionType.CreateTodo: {
      return [...state, action.payload];
    }

    case ActionType.UpdateTodo: {
      return state.map((todo) => {
        if (action.payload.id === todo.id) {
          todo = action.payload;
        }
        return todo;
      });
    }

    case ActionType.DeleteTodo: {
      return state.filter((todo) => {
        return todo !== action.payload;
      });
    }

    default:
      return state;
  }
};

export default todoReducer;
