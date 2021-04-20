import { VscSignOut } from 'react-icons/vsc';

import * as S from './styles';

import logoImg from '../../assets/logo.png';

interface IHeader {
  handleSignOut: () => void;
  userName: string;
}

const Header = ({ handleSignOut, userName }: IHeader) => {
  return (
    <S.Wrapper>
      <img src={logoImg} alt="Imagem com as letras da logo" />

      <div>
        <h4>Seja bem-vindo,</h4>
        <h3>{userName}</h3>
      </div>

      <button onClick={handleSignOut}>
        <VscSignOut size={33} color="#666360" />
      </button>
    </S.Wrapper>
  );
};

export default Header;
