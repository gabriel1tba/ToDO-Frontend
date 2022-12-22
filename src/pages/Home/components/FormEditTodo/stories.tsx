import { Story, Meta } from '@storybook/react';

import FormEditTodo from '.';

import { IFormEditTodo } from '../../interfaces';

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
  title: 'Todo/FormEditTodo',
  component: FormEditTodo,
  argTypes: {
    onCloseModal: {
      type: 'function',
    },
    editTodo: {
      type: 'boolean',
    },
    showTodo: {
      type: 'boolean',
    },
  },
  args: {
    onCloseModal: () => null,
    todo: {
      todoMock,
    },
  },
} as Meta;

export const Default: Story<IFormEditTodo> = (args) => (
  <div
    style={{
      width: '540px',
      margin: 'auto',
      border: '1px solid #000',
      padding: '0 20px 20px',
      borderRadius: '5px',
    }}
  >
    <FormEditTodo {...args} />
  </div>
);
