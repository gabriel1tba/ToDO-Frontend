import * as S from './styles';

import { IBadge } from './interfaces';

const Badge = ({ title, fontColor, backgroundColor }: IBadge) => {
  return (
    <S.Badge
      style={{
        color: fontColor,
        backgroundColor,
      }}
    >
      {title}
    </S.Badge>
  );
};

export default Badge;
