import { Story, Meta } from '@storybook/react';
import { FaUser } from 'react-icons/fa';

import Input, { IInput } from '.';

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
  },
  argTypes: {
    name: {
      type: 'string',
    },
    icon: {
      type: 'function',
    },
    error: {
      type: 'string',
    },
    onChange: {
      action: 'change',
    },
  },
} as Meta;

export const Default: Story<IInput> = (args) => <Input {...args} />;

export const withIcon: Story<IInput> = (args) => <Input {...args} />;

withIcon.args = {
  icon: FaUser,
};

export const withError: Story<IInput> = (args) => <Input {...args} />;

withError.args = {
  error: 'Ops...something is wrong',
};
