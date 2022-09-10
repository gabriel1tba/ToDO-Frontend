import { FaHourglass } from 'react-icons/fa';

import * as S from './styles';

import { IButton } from './interfaces';

const Button = ({
  children,
  loading,
  color = 'primary',
  size = 'normal',
  type = 'button',
  disabled,
  icon,
  ...rest
}: IButton) => (
  <S.Wrapper
    type={type}
    size={size}
    color={color}
    disabled={loading || disabled}
    {...rest}
  >
    {loading ? (
      <S.WrapperLoading size={size}>
        <FaHourglass size={14} /> Carregando...
      </S.WrapperLoading>
    ) : (
      <>
        {icon} {children}
      </>
    )}
  </S.Wrapper>
);

export default Button;
