import { Story, Meta } from '@storybook/react';
import { FiAlertCircle } from 'react-icons/fi';

import Tooltip, { ITooltip } from '.';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    title: {
      type: 'string',
    },
    children: {
      type: 'function',
    },
  },
} as Meta;

export const Default: Story<ITooltip> = (args) => <Tooltip {...args} />;

Default.args = {
  title: 'Lorem Ipsum',
  children: <FiAlertCircle size={20} />,
};
