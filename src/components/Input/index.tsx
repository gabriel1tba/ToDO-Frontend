import { forwardRef, useCallback, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import * as S from './styles';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  ref: React.LegacyRef<HTMLInputElement> | undefined;
  error: string | undefined;
  defaultValue?: string | number | string[] | undefined;
}

const Input = forwardRef(
  ({ name, icon: Icon, error, defaultValue = '', ...rest }: IInput, ref) => {
    const [isFocused, setIsFocued] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const inputRef = useRef({} as HTMLInputElement);

    const handleInputFocus = useCallback(() => {
      setIsFocued(true);
    }, []);

    const handleInputBlur = useCallback(() => {
      setIsFocued(false);

      inputRef.current.value ? setIsFilled(true) : setIsFilled(false);
    }, []);

    return (
      <S.Wrapper
        hasError={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
        ref={inputRef}
      >
        {Icon && <Icon size={20} />}
        <input
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

Input.displayName = 'Input';

export default Input;
