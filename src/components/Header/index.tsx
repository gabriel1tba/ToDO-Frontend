import { VscSignOut } from 'react-icons/vsc';

import * as S from './styles';

import logoImg from 'assets/logo.png';
import { useTodos } from 'hooks/todos';

interface IHeader {
  userName?: string;
  handleSignOut: () => void;
}

const Header = ({ userName, handleSignOut }: IHeader) => {
  const { handleSearchWord } = useTodos();

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

      <S.InputSearch
        onChange={(event) => handleSearchWord(event.target.value)}
        placeholder="Pesquisar tarefas..."
      />

      <button onClick={handleSignOut}>
        <VscSignOut size={35} color="#666360" />
      </button>
    </S.Wrapper>
  );
};

export default Header;
