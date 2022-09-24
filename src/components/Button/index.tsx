import * as S from './styles';

import Loader from 'components/Loader';

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
        {children} <Loader size={12} color="white" />
      </S.WrapperLoading>
    ) : (
      <>
        {children} {icon}
      </>
    )}
  </S.Wrapper>
);

export default Button;
