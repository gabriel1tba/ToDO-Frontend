import { Story, Meta } from '@storybook/react';

import TodoItem from '.';
import { ITodoItem } from '../../interfaces';

const todoMock = {
  id: '7b403461-2579-4635-af53-9c07f644f2ec',
  user_id: '6b14098c-7357-4fe5-9bba-24061c62bf1c',
  completed: false,
  title: 'Finalizar Curso CAR CRM',
  description: '',
  created_at: '2022-04-16T13:59:36.932Z',
  updated_at: '2022-04-16T13:59:40.339Z',
};

export default {
  title: 'Todo/Item',
  component: TodoItem,
} as Meta;

export const Default: Story<ITodoItem> = (args) => (
  <div style={{ width: 'fit-content', margin: 'auto' }}>
    <TodoItem todo={args.todo} />
  </div>
);

Default.args = {
  todo: todoMock,
};

export const Completed: Story<ITodoItem> = (args) => (
  <div style={{ width: 'fit-content', margin: 'auto' }}>
    <TodoItem todo={args.todo} />
  </div>
);

Completed.args = {
  todo: { ...todoMock, completed: true },
};
