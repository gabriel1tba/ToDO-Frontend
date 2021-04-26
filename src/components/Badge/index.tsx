import * as S from './styles';

interface IBadge {
  title: string;
  unit: number;
  hexColor: string;
  rgbaBackground: string;
}

const Badge = ({ title, unit, hexColor, rgbaBackground }: IBadge) => {
  return (
    <S.BadgeWrapper>
      <span
        style={{
          color: hexColor,
          backgroundColor: rgbaBackground,
        }}
      >
        {`${title} ${unit}`}
      </span>
    </S.BadgeWrapper>
  );
};

export default Badge;
