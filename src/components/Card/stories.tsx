import { Story, Meta } from '@storybook/react';
import { CgNotes } from 'react-icons/cg';

import Card, { ICard } from '.';

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
