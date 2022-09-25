import { Story, Meta } from '@storybook/react';
import { CgNotes } from 'react-icons/cg';

import Card from '.';
import { ICard } from './interfaces';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    color: {
      control: {
        type: 'select',
        options: ['info', 'danger'],
      },
    },
  },
} as Meta;

export const Default: Story<ICard> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <Card {...args} />
  </div>
);

Default.args = {
  title: 'Você ainda não tem tarefas cadastradas',
  description: 'Crie tarefas clicando no botão Nova Tarefa',
  icon: CgNotes,
};

export const Danger: Story<ICard> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <Card {...args} />
  </div>
);

Danger.args = {
  color: 'danger',
  title: 'Você ainda não tem tarefas cadastradas',
  icon: CgNotes,
};
