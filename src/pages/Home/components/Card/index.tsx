import * as S from './styles';

export interface ICard {
  title: string;
  color?: 'info' | 'danger';
  icon: React.ElementType;
  children?: React.ReactNode;
}

const Card = ({ title, icon: Icon, color = 'info', children }: ICard) => (
  <S.Wrapper color={color}>
    <Icon />
    <strong>{title}</strong>

    {children && children}
  </S.Wrapper>
);

export default Card;
