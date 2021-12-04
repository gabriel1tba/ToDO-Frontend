import { VscSignOut } from 'react-icons/vsc';

import * as S from './styles';

import logoImg from 'assets/logo.png';

import { useTodos } from 'hooks';
import { useHistory } from 'react-router';

interface IHeader {
  userName?: string;
  onSignOut: () => void;
}

const Header = ({ userName, onSignOut }: IHeader) => {
  const { getSearchedWord } = useTodos();
  const history = useHistory();

  return (
    <S.Wrapper>
      <div>
        <img src={logoImg} alt="logo image" />

        <div>
          {userName ? (
            <>
              <h4>Seja bem-vindo,</h4>
              <h3>{userName}</h3>
            </>
          ) : null}
        </div>
      </div>
      {userName ? (
        <div>
          <S.InputSearch
            onChange={(event) => getSearchedWord(event.target.value)}
            placeholder="Pesquisar tarefas..."
          />

          <button onClick={onSignOut}>
            <VscSignOut size={35} color="#666360" />
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => history.push('/')}>
            <VscSignOut size={35} color="#666360" />
          </button>
        </div>
      )}
    </S.Wrapper>
  );
};

export default Header;
