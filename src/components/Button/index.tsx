import Loader from 'components/Loader';

import * as S from './styles';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'info' | 'warning' | 'danger' | 'success' | 'outline';
  icon?: JSX.Element;
  size?: 'large' | 'normal';
}

const Button = ({
  children,
  loading,
  variant = 'primary',
  size = 'normal',
  type = 'button',
  disabled,
  icon,
  ...props
}: IButton) => (
  <S.Wrapper
    type={type}
    size={size}
    variant={variant}
    disabled={loading || disabled}
    {...props}
  >
    {loading ? (
      <S.WrapperLoading size={size}>
        {children} <Loader size={12} variant="white" />
      </S.WrapperLoading>
    ) : (
      <>
        {children} {icon}
      </>
    )}
  </S.Wrapper>
);

export default Button;
