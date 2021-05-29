import { forwardRef, useCallback, useRef, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import * as S from './styles';

interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  ref: React.LegacyRef<HTMLTextAreaElement>;
  error: string | undefined;
  defaultValue?: string | number | string[] | undefined;
}

const TextArea = forwardRef(
  ({ name, error, defaultValue = '', ...rest }: ITextArea, ref) => {
    const [isFocused, setIsFocued] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const textAreaRef = useRef({} as HTMLTextAreaElement);

    const handleInputFocus = useCallback(() => {
      setIsFocued(true);
    }, []);

    const handleInputBlur = useCallback(() => {
      setIsFocued(false);

      textAreaRef.current.value ? setIsFilled(true) : setIsFilled(false);
    }, []);

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
            <FiAlertCircle
              color={isFocused ? '#ff9000' : '#c43030'}
              size={20}
            />
          </S.Error>
        )}
      </S.Wrapper>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
