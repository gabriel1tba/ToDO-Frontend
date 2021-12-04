import { FaHourglass } from 'react-icons/fa';

import * as S from './styles';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  icon?: JSX.Element;
  size?: 'large' | 'normal';
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
        <S.WrapperLoading size={size}>
          <FaHourglass size={15} /> Carregando...
        </S.WrapperLoading>
      ) : (
        <>
          {icon} {children}
        </>
      )}
    </S.Wrapper>
  );
};

export default Button;
