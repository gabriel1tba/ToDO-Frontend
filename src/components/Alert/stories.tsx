import { Story, Meta } from '@storybook/react';

import Alert, { IAlert } from '.';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    isOpen: {
      type: 'boolean',
    },
  },
} as Meta;

export const Default: Story<IAlert> = (args) => <Alert {...args} />;

Default.args = {
  title: 'Você ainda não tem tarefas cadastradas',
  description: 'Crie tarefas clicando no botão Nova Tarefa',
  isOpen: true,
};
