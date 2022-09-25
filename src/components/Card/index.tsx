import { Container } from './styles';

import { ICard } from './interfaces';

const Card = ({ title, description, icon: Icon, color = 'info' }: ICard) => {
  return (
    <Container color={color}>
      <Icon />
      <strong>{title}</strong>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  );
};

export default Card;
