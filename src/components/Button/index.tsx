import * as S from './styles';

import Loading from '../Loading';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  icon?: JSX.Element;
  size?: 'fullWidth' | 'normal';
  background: string;
}

const Button = ({
  children,
  loading,
  size = 'normal',
  background,
  icon,
  ...rest
}: IButton) => {
  return (
    <S.Wrapper type="button" size={size} background={background} {...rest}>
      {loading ? (
        <Loading typeLoading="roller" />
      ) : (
        <>
          {icon} {children}
        </>
      )}
    </S.Wrapper>
  );
};

export default Button;
