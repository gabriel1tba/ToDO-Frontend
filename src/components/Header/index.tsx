import { VscSignOut } from 'react-icons/vsc';

import * as S from './styles';

import logoImg from '../../assets/logo.png';

const Header = () => {
  return (
    <S.Wrapper>
      <img src={logoImg} alt="Imagem do logo" />

      <div>
        <h4>Seja bem-vindo,</h4>
        <h3>Gabriel Ferreira</h3>
      </div>

      <button>
        <VscSignOut size={30} color="#666360" />
      </button>
    </S.Wrapper>
  );
};

export default Header;
