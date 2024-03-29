import { Story, Meta } from '@storybook/react';

import TextArea, { ITextArea } from '.';

export default {
  title: 'Form/TextArea',
  component: TextArea,
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
    error: {
      type: 'string',
    },
    onChange: {
      action: 'change',
    },
  },
} as Meta;

export const Default: Story<ITextArea> = (args) => <TextArea {...args} />;

export const withError: Story<ITextArea> = (args) => <TextArea {...args} />;

withError.args = {
  error: 'Ops...something is wrong',
};
