import { Story, Meta } from '@storybook/react';

import CheckBox, { ICheckBox } from '.';

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  argTypes: {
    checked: {
      type: 'boolean',
    },
    border: {
      control: {
        type: 'select',
        options: ['round', 'square'],
      },
    },
  },
} as Meta;

export const Default: Story<ICheckBox> = (args) => <CheckBox {...args} />;

Default.args = {
  checked: false,
};
