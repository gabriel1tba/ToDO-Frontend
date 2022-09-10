import { Story, Meta } from '@storybook/react';

import Header from '.';
import { IHeader } from './interfaces';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    userName: {
      type: 'string',
    },
    onSignOut: {
      type: 'function',
    },
  },
} as Meta;

export const Default: Story<IHeader> = (args) => <Header {...args} />;

Default.args = {
  userName: 'Gabriel Ferreira',
  onSignOut: () => null,
};
