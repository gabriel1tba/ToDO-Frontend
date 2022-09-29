import { forwardRef, ForwardRefRenderFunction, useRef, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import * as S from './styles';

export interface ITextArea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error: string | undefined;
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, ITextArea> = (
  { error, ...rest },
  ref
) => {
  const theme = useTheme();

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
    <S.Wrapper
      hasError={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
    >
      <textarea ref={ref} {...rest} />
      {error && (
        <S.Error title={error}>
          <FiAlertCircle
            color={
              isFocused ? theme.colors.gray[500] : theme.colors.primary.main
            }
            size={20}
          />
        </S.Error>
      )}
    </S.Wrapper>
  );
};

export default forwardRef(TextArea);
