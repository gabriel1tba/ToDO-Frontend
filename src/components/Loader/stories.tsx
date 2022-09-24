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
  },
} as Meta;

export const Default: Story<ILoader> = (args) => <Loader {...args} />;

Default.args = {
  isLoading: true,
};
