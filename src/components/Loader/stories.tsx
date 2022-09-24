import { Story, Meta } from '@storybook/react';

import Loader from '.';
import { ILoader } from './interfaces';

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {
    isLoading: {
      type: 'boolean',
    },
    alwaysOnTop: {
      type: 'boolean',
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'white'],
      },
    },
    size: {
      type: 'number',
    },
  },
} as Meta;

export const Default: Story<ILoader> = (args) => (
  <div
    style={{
      height: '90vh',
      width: '90vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Loader {...args} />
  </div>
);

Default.args = {
  isLoading: true,
  alwaysOnTop: false,
  color: 'primary',
  size: 32,
};

export const White: Story<ILoader> = (args) => (
  <div
    style={{
      backgroundColor: '#000',
      height: '90vh',
      width: '90vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Loader {...args} />
  </div>
);

White.args = {
  isLoading: true,
  alwaysOnTop: false,
  color: 'white',
  size: 32,
};
