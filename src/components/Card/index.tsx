import * as S from './styles';

export interface ICard {
  title: string;
  color?: 'info' | 'danger';
  description: string;
  icon: React.ElementType;
}

const Card = ({ title, description, icon: Icon, color = 'info' }: ICard) => {
  return (
    <S.Wrapper color={color}>
      <Icon />
      <strong>{title}</strong>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </S.Wrapper>
  );
};

export default Card;
