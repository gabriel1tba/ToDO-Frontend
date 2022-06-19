import { build, fake } from '@jackfranklin/test-data-bot';

export interface User {
  username: string;
  email: string;
  password: string;
}

export const createUser = build<User>('User', {
  fields: {
    username: fake((f) => f.internet.userName()),
    password: fake((f) => f.internet.password()),
    email: '',
  },
  postBuild: (user) => ({
    ...user,
    email: `${user.username.toLowerCase()}+e2e@cypress.com`,
  }),
});

export type Todo = {
  title: string;
  description?: string;
};

const createTodoItem = build<Todo>('User', {
  fields: {
    title: fake((f) => f.lorem.sentence()),
    description: fake((f) => f.lorem.sentence()),
  },
});

export const createTodoList = (quantity: number) => {
  const todos: Todo[] = [];
  for (let i = 0; i < quantity; i++) {
    todos.push(createTodoItem());
  }
  return todos;
};
