import { TTodo } from 'services/TodoService/interfaces';

import { ActionTypes, Actions } from './actions';

const todosReducer = (state: TTodo[], action: Actions): TTodo[] => {
  switch (action.type) {
    case ActionTypes.GET_TODOS: {
      return action.payload;
    }

    case ActionTypes.CREATE_TODO: {
      return [...state, action.payload];
    }

    case ActionTypes.UPDATE_TODO: {
      return state.map((todo) => {
        if (action.payload.id === todo.id) {
          todo = { ...action.payload, created_at: todo.created_at };
        }
        return todo;
      });
    }

    case ActionTypes.DELETE_TODO: {
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    }

    default:
      return state;
  }
};

export default todosReducer;
