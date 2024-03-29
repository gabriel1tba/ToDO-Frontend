import { Story, Meta } from '@storybook/react';

import Header, { IHeader } from '.';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    userName: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<IHeader> = (args) => <Header {...args} />;

Default.args = {
  userName: 'Gabriel Ferreira',
};
