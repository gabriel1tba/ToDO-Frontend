import { Story, Meta } from '@storybook/react';

import NewTodo from '.';

import { INewTodo } from '../../../interfaces';

export default {
  title: 'Todo/NewTodo',
  component: NewTodo,
  argTypes: {
    onCloseModal: {
      type: 'function',
    },
  },
  args: {
    onCloseModal: () => null,
  },
} as Meta;

export const Default: Story<INewTodo> = (args) => (
  <div
    style={{
      width: '540px',
      margin: 'auto',
      border: '1px solid #000',
      padding: '0 20px 20px',
      borderRadius: '5px',
    }}
  >
    <NewTodo {...args} />
  </div>
);
