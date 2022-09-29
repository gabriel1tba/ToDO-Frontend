import { useTransition, AnimatedValue, ForwardedProps } from 'react-spring';

import Toast from './components/Toast';

import * as S from './styles';

import { IToastMessage } from 'context/toast/interfaces';

export interface IToastContainer {
  messages: IToastMessage[];
}

export interface IToast {
  toastMessage: IToastMessage;
  style: AnimatedValue<ForwardedProps<ForwardedProps<React.CSSProperties>>>;
}

const ToastContainer = ({ messages }: IToastContainer) => {
  const toastTransition = useTransition(messages, (message) => message.id, {
    from: {
      right: '-120%',
      opacity: 0,
    },
    enter: {
      right: '0%',
      opacity: 1,
    },
    leave: {
      right: '-120%',
      opacity: 0,
    },
  });

  return (
    <S.Wrapper>
      {toastTransition.map(({ item, key, props }) => (
        <Toast key={key} style={props} toastMessage={item} />
      ))}
    </S.Wrapper>
  );
};

export default ToastContainer;
