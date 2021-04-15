import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper type="button" {...rest}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
