import { Story, Meta } from '@storybook/react';

import Loading from '.';
import { ILoading } from './interfaces';

export default {
  title: 'Loading',
  component: Loading,
  argTypes: {
    isLoading: {
      type: 'boolean',
    },
  },
} as Meta;

export const Default: Story<ILoading> = (args) => <Loading {...args} />;

Default.args = {
  isLoading: true,
};
