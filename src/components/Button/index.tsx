import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

const Button = ({ children, loading, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper type="button" {...rest}>
      {loading ? 'Carregando...' : children}
    </S.Wrapper>
  );
};

export default Button;
