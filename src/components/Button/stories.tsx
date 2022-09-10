import { Story, Meta } from '@storybook/react';
import { FaUser } from 'react-icons/fa';

import Button from '.';
import { IButton } from './interfaces';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
    loading: {
      type: 'boolean',
    },
    icon: {
      type: 'function',
    },
  },
} as Meta;

export const Default: Story<IButton> = (args) => <Button {...args} />;

Default.args = {
  children: 'Without icon',
};

export const Large: Story<IButton> = (args) => <Button {...args} />;

Large.args = {
  children: 'Large',
  size: 'large',
};

export const Success: Story<IButton> = (args) => <Button {...args} />;

Success.args = {
  children: 'Success',
  color: 'success',
};

export const Loading: Story<IButton> = (args) => <Button {...args} />;

Loading.args = {
  children: 'Loading',
  loading: true,
};

export const Icon: Story<IButton> = (args) => <Button {...args} />;

Icon.args = {
  children: 'Icon',
  icon: <FaUser />,
};
