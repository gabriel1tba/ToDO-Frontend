import { FaHourglass } from 'react-icons/fa';

import * as S from './styles';

import { IButton } from './interfaces';

const Button = ({
  children,
  loading,
  size = 'normal',
  type = 'button',
  background,
  icon,
  ...rest
}: IButton) => {
  return (
    <S.Wrapper type={type} size={size} background={background} {...rest}>
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
