import { AnimatedValue, ForwardedProps } from 'react-spring';

import { IToastMessage } from 'context/toast/interfaces';

export interface IToastContainer {
  messages: IToastMessage[];
}

export interface IToast {
  toastMessage: IToastMessage;
  style: AnimatedValue<ForwardedProps<ForwardedProps<React.CSSProperties>>>;
}
