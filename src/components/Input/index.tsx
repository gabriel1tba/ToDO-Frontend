import { useRef, useState, forwardRef, ForwardRefRenderFunction } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { IconType } from 'react-icons';

import * as S from './styles';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  error: string | undefined;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { icon: Icon, error, ...props },
  ref
) => {
  const [isFocused, setIsFocued] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef({} as HTMLInputElement);

  const handleInputFocus = () => {
    setIsFocued(true);
  };

  const handleInputBlur = () => {
    setIsFocued(false);

    inputRef.current.value ? setIsFilled(true) : setIsFilled(false);
  };

  return (
    <S.Wrapper
      hasError={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      ref={inputRef}
    >
      {Icon && <Icon size={20} />}

      <input ref={ref} {...props} />
      {error && (
        <S.Error title={error}>
          <FiAlertCircle />
        </S.Error>
      )}
    </S.Wrapper>
  );
};

export default forwardRef(Input);
