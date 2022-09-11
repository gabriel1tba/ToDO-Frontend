import { Story, Meta } from '@storybook/react';

import Toast from '.';

import { IToast } from 'components/ToastContainer/interfaces';
import { v4 } from 'uuid';

export default {
  title: 'Toast',
  component: Toast,
} as Meta;

export const Default: Story<IToast> = (args) => <Toast {...args} />;

Default.args = {
  toastMessage: {
    id: v4(),
    title: 'Info',
    description: 'Info Description',
    secondsDuration: 4000,
  },
};

export const Success: Story<IToast> = (args) => <Toast {...args} />;

Success.args = {
  toastMessage: {
    id: v4(),
    type: 'success',
    title: 'Info',
    description: 'Info Description',
    secondsDuration: 4000,
  },
};

export const Error: Story<IToast> = (args) => <Toast {...args} />;

Error.args = {
  toastMessage: {
    id: v4(),
    type: 'error',
    title: 'Info',
    description: 'Info Description',
    secondsDuration: 4000,
  },
};
