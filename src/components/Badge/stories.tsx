import { Story, Meta } from '@storybook/react';

import Badge from '.';
import { IBadge } from './interfaces';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    title: {
      type: 'string',
    },
    fontColor: {
      type: 'string',
    },
    backgroundColor: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<IBadge> = (args) => <Badge {...args} />;

Default.args = {
  title: '1 de 5',
  fontColor: '#D9D9D9',
  backgroundColor: '#333333',
};

export const Success: Story<IBadge> = (args) => <Badge {...args} />;

Success.args = {
  title: 'Success',
  fontColor: '#1e9250',
  backgroundColor: '#e0fded',
};

export const Error: Story<IBadge> = (args) => <Badge {...args} />;

Error.args = {
  title: 'Error',
  fontColor: '#FC5050',
  backgroundColor: '#ffe3e3',
};
