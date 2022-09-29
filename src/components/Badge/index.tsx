import * as S from './styles';

export interface IBadge {
  title: string | number;
  color: string;
  background: string;
}

const Badge = ({ title, color, background }: IBadge) => {
  return (
    <S.Wrapper color={color} background={background}>
      {title}
    </S.Wrapper>
  );
};

export default Badge;
