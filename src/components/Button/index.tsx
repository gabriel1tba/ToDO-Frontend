import { FaHourglass } from 'react-icons/fa';

import * as S from './styles';

import { IButton } from './interfaces';

const Button = ({
  children,
  loading,
  color = 'primary',
  size = 'normal',
  type = 'button',
  icon,
  ...rest
}: IButton) => {
  return (
    <S.Wrapper type={type} size={size} color={color} {...rest}>
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
