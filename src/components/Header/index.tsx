import { useHistory } from 'react-router';
import { VscSignOut } from 'react-icons/vsc';

import * as S from './styles';

import { useTodos } from 'hooks';

import logoImg from 'assets/logo.png';

import { IHeader } from './interfaces';

const Header = ({ userName, onSignOut }: IHeader) => {
  const history = useHistory();

  const { getSearchTerm } = useTodos();

  const handleSignOut = () => {
    getSearchTerm('');
    onSignOut();
  };

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
            onChange={(event) => getSearchTerm(event.target.value)}
            placeholder="Pesquisar tarefas..."
          />

          <button onClick={handleSignOut}>
            <VscSignOut size={35} />
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => history.push('/')}>
            <VscSignOut size={35} />
          </button>
        </div>
      )}
    </S.Wrapper>
  );
};

export default Header;
