import { Container } from './styles';

import { ICard } from './interfaces';

const Card = ({ title, description, icon: Icon, color = 'info' }: ICard) => {
  return (
    <Container color={color}>
      <Icon />
      <strong>{title}</strong>
      <p>{description && description}</p>
    </Container>
  );
};

export default Card;
