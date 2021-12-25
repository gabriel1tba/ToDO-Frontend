import { forwardRef, ForwardRefRenderFunction, useRef, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import * as S from './styles';

import { ITextArea } from './interfaces';

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, ITextArea> = (
  { name, error, defaultValue = '', ...rest },
  ref,
) => {
  const [isFocused, setIsFocued] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const textAreaRef = useRef({} as HTMLTextAreaElement);

  const handleInputFocus = () => {
    setIsFocued(true);
  };

  const handleInputBlur = () => {
    setIsFocued(false);

    textAreaRef.current.value ? setIsFilled(true) : setIsFilled(false);
  };

  return (
    <S.Wrapper hasError={!!error} isFocused={isFocused} isFilled={isFilled}>
      <textarea
        defaultValue={defaultValue}
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

export default forwardRef(TextArea);
