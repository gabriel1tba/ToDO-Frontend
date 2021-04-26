import { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import * as S from './styles';

interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextArea = ({ name, ...rest }: ITextArea) => {
  const [isFocused, setIsFocued] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const textAreaRef = useRef({} as HTMLTextAreaElement);

  const { fieldName, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocued(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocued(false);

    textAreaRef.current.value ? setIsFilled(true) : setIsFilled(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.Wrapper hasError={!!error} isFocused={isFocused} isFilled={isFilled}>
      <textarea
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={textAreaRef}
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

export default TextArea;
