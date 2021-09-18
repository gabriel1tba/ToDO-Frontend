import { VscSignOut } from 'react-icons/vsc';

import * as S from './styles';

import logoImg from 'assets/logo.png';
import useTodos from 'hooks/todos';

interface IHeader {
  userName?: string;
  handleSignOut: () => void;
}

const Header = ({ userName, handleSignOut }: IHeader) => {
  const { getSearchedWord } = useTodos();

  return (
    <S.Wrapper>
      <div>
        <img src={logoImg} alt="Imagem com as letras da logo" />

        <div>
          {userName ? (
            <>
              <h4>Seja bem-vindo,</h4>
              <h3>{userName}</h3>
            </>
          ) : null}
        </div>
      </div>
      <div>
        <S.InputSearch
          onChange={(event) => getSearchedWord(event.target.value)}
          placeholder="Pesquisar tarefas..."
        />

        <button onClick={handleSignOut}>
          <VscSignOut size={35} color="#666360" />
        </button>
      </div>
    </S.Wrapper>
  );
};

export default Header;
