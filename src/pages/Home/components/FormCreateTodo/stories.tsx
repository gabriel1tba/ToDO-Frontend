import { Story, Meta } from '@storybook/react';

import FormCreateTodo from '.';

import { IFormTodo } from '../../interfaces';

export default {
  title: 'Todo/FormCreateTodo',
  component: FormCreateTodo,
  argTypes: {
    onCloseModal: {
      type: 'function',
    },
  },
  args: {
    onCloseModal: () => null,
  },
} as Meta;

export const Default: Story<IFormTodo> = (args) => (
  <div
    style={{
      width: '540px',
      margin: 'auto',
      border: '1px solid #000',
      padding: '0 20px 20px',
      borderRadius: '5px',
    }}
  >
    <FormCreateTodo {...args} />
  </div>
);
