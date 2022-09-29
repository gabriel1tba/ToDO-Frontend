import Loader from 'components/Loader';

import * as S from './styles';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  color?: 'primary' | 'info' | 'warning' | 'danger' | 'success' | 'outline';
  icon?: JSX.Element;
  size?: 'large' | 'normal';
}

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
