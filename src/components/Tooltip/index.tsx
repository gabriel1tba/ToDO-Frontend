import * as S from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Tooltip = ({ title, className, children }: TooltipProps) => {
  return (
    <S.Wrapper className={className}>
      {children}
      <span>{title}</span>
    </S.Wrapper>
  );
};

export default Tooltip;
