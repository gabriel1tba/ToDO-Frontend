import * as S from './styles';

import Loading from 'components/Loading';

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
        <Loading size={12} color="white" /> Carregando...
      </S.WrapperLoading>
    ) : (
      <>
        {icon} {children}
      </>
    )}
  </S.Wrapper>
);

export default Button;
