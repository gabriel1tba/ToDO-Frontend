import { Story, Meta } from '@storybook/react';

import Loader, { ILoader } from '.';

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
    variant: {
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
  variant: 'primary',
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
  variant: 'white',
  size: 32,
};
