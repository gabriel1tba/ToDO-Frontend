import { Story, Meta } from '@storybook/react';

import CreateTodo from '.';

import { ICreateTodo } from '../../../interfaces';

export default {
  title: 'Todo/CreateTodo',
  component: CreateTodo,
  argTypes: {
    onCloseModal: {
      type: 'function',
    },
  },
  args: {
    onCloseModal: () => null,
  },
} as Meta;

export const Default: Story<ICreateTodo> = (args) => (
  <div
    style={{
      width: '540px',
      margin: 'auto',
      border: '1px solid #000',
      padding: '0 20px 20px',
      borderRadius: '5px',
    }}
  >
    <CreateTodo {...args} />
  </div>
);
