import { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import * as S from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input = ({ name, icon: Icon, ...rest }: InputProps) => {
  const [isFocused, setIsFocued] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef({} as HTMLInputElement);

  const { fieldName, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocued(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocued(false);

    inputRef.current.value ? setIsFilled(true) : setIsFilled(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.Wrapper hasError={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <S.Error title={error}>
          <FiAlertCircle color="#c43030" size={20} />
        </S.Error>
      )}
    </S.Wrapper>
  );
};

export default Input;
