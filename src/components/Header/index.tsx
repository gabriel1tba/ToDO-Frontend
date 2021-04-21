import { AiOutlineLogout } from 'react-icons/ai';

import * as S from './styles';

import logoImg from '../../assets/logo.png';

interface IHeader {
  userName?: string;
  handleSignOut: () => void;
}

const Header = ({ userName, handleSignOut }: IHeader) => {
  return (
    <S.Wrapper>
      <img src={logoImg} alt="Imagem com as letras da logo" />

      <div>
        {userName ? (
          <>
            <h4>Seja bem-vindo,</h4>
            <h3>{userName}</h3>
          </>
        ) : null}
      </div>

      <button onClick={handleSignOut}>
        <AiOutlineLogout size={40} color="#666360" />
      </button>
    </S.Wrapper>
  );
};

export default Header;
