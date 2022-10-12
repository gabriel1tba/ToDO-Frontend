import { TTodo } from 'services/TodoService/interfaces';

import { Types, Action } from './actions';

const todosReducer = (state: TTodo[], action: Action): TTodo[] => {
  switch (action.type) {
    case Types.GET_TODOS: {
      return action.payload;
    }

    case Types.CREATE_TODO: {
      return [...state, action.payload];
    }

    case Types.UPDATE_TODO: {
      return state.map((todo) => {
        if (action.payload.id === todo.id) {
          todo = { ...action.payload, created_at: todo.created_at };
        }
        return todo;
      });
    }

    case Types.DELETE_TODO: {
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    }

    default:
      return state;
  }
};

export default todosReducer;
