import { Story, Meta } from '@storybook/react';

import Modal from '.';
import { IModal } from './interfaces';

const isOpen = true;

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    children: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    open: {
      type: 'boolean',
    },
    onCloseModal: {
      type: 'function',
    },
  },
} as Meta;

export const Default: Story<IModal> = (args) => <Modal {...args} />;

Default.args = {
  children: 'Content in modal',
  title: 'Content On Modal',
  open: isOpen,
};