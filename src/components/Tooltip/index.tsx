import { ITooltip } from './interfaces';
import * as S from './styles';

const Tooltip = ({ title, className, children }: ITooltip) => {
  return (
    <S.Wrapper className={className}>
      {!!children && children}
      <span>{title}</span>
    </S.Wrapper>
  );
};

export default Tooltip;
