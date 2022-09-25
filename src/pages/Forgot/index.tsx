import { useHistory } from 'react-router';
import { TbHome } from 'react-icons/tb';

import constructionImage from 'assets/underConstruction.jpg';

import Button from 'components/Button';

import * as S from './styles';

const Forgot = () => {
  const history = useHistory();

  return (
    <S.Wrapper>
      <img src={constructionImage} />

      <Button icon={<TbHome />} onClick={() => history.push('/')}>
        Clique para retornar
      </Button>
    </S.Wrapper>
  );
};

export default Forgot;
