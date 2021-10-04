import { useRef, useState, forwardRef, ForwardRefRenderFunction } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import * as S from './styles';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  error: string | undefined;
}

const Input: ForwardRefRenderFunction<S.IWrapper, IInput> = (
  { name, icon: Icon, error, ...rest },
  ref,
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
      ref={inputRef}
    >
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={ref}
        name={name}
        {...rest}
      />
      {error && (
        <S.Error title={error}>
          <FiAlertCircle color={isFocused ? '#ff9000' : '#c43030'} size={20} />
        </S.Error>
      )}
    </S.Wrapper>
  );
};

export default forwardRef(Input);
