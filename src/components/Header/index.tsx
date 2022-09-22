import { RiShutDownLine } from 'react-icons/ri';
import { useHistory } from 'react-router';

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
      <div className="logo-name-container">
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
        <div className="input-logout-container">
          <S.InputSearch
            type="search"
            placeholder="Pesquisar tarefas..."
            onChange={(event) => getSearchTerm(event.target.value)}
          />

          <button data-testid="sign-out" onClick={handleSignOut}>
            <RiShutDownLine size={32} />
          </button>
        </div>
      ) : (
        <div className="input-logout-container">
          <button onClick={() => history.push('/')}>
            <RiShutDownLine size={32} />
          </button>
        </div>
      )}
    </S.Wrapper>
  );
};

export default Header;
