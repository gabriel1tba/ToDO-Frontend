import * as S from './styles';

import { ITooltip } from './interfaces';

const Tooltip = ({ title, className, children }: ITooltip) => {
  return (
    <S.Wrapper className={className}>
      {!!children && children}
      <span>{title}</span>
    </S.Wrapper>
  );
};

export default Tooltip;
