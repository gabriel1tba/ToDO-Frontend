import * as S from './styles';

interface IBadge {
  title: string;
  unit?: number;
  fontColor: string;
  rgbaBackground: string;
}

const Badge = ({ title, unit, fontColor, rgbaBackground }: IBadge) => {
  return (
    <S.Badge
      style={{
        color: fontColor,
        backgroundColor: rgbaBackground,
      }}
    >
      {`${title} ${unit ?? ''}`}
    </S.Badge>
  );
};

export default Badge;
