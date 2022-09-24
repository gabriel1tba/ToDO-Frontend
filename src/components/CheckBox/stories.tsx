import { Story, Meta } from '@storybook/react';

import CheckBox from '.';
import { ICheckBox } from './interfaces';

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
