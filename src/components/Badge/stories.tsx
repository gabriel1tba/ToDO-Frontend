import { Story, Meta } from '@storybook/react';

import Badge, { IBadge } from '.';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    title: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
    background: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<IBadge> = (args) => <Badge {...args} />;

Default.args = {
  title: '1 de 5',
  color: '#D9D9D9',
  background: '#333333',
};

export const Success: Story<IBadge> = (args) => <Badge {...args} />;

Success.args = {
  title: 'Success',
  color: '#1e9250',
  background: '#e0fded',
};

export const Error: Story<IBadge> = (args) => <Badge {...args} />;

Error.args = {
  title: 'Error',
  color: '#FC5050',
  background: '#ffe3e3',
};
