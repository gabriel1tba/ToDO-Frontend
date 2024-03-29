import { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { useToastContext } from 'hooks';
import { IToast } from 'components/ToastContainer';

import * as S from './styles';

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast = ({ toastMessage, style }: IToast) => {
  const { removeToast } = useToastContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toastMessage.id);
    }, toastMessage.secondsDuration * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [toastMessage.id, removeToast, toastMessage.secondsDuration]);

  return (
    <S.Wrapper
      type={toastMessage.type}
      hasdescription={Number(!!toastMessage.description)}
      style={style}
    >
      {icons[toastMessage.type || 'info']}
      <div>
        <strong>{toastMessage.title}</strong>
        <p>{toastMessage.description}</p>
      </div>
      <button onClick={() => removeToast(toastMessage.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </S.Wrapper>
  );
};

export default Toast;
