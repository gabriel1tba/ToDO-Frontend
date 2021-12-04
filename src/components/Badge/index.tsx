import { memo } from 'react';
import * as S from './styles';

interface IBadge {
  title: string;
  fontColor: string;
  backgroundColor: string;
}

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

export default memo(Badge);
