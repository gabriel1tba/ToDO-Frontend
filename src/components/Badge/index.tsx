import * as S from './styles';

interface IBadge {
  title: string;
  dynamicAmount?: number;
  fontColor: string;
  rgbaBackground: string;
}

const Badge = ({ title, dynamicAmount, fontColor, rgbaBackground }: IBadge) => {
  return (
    <S.Badge
      style={{
        color: fontColor,
        backgroundColor: rgbaBackground,
      }}
    >
      {`${title} ${dynamicAmount ?? ''}`}
    </S.Badge>
  );
};

export default Badge;
