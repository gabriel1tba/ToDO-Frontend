import { useContext } from 'react';
import { TodoContext } from 'context/todos';
import { ITodoContext } from 'context/todos/interfaces';

const useTodos = (): ITodoContext => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodos depende do TodoProvider');
  }

  return context;
};

export default useTodos;
