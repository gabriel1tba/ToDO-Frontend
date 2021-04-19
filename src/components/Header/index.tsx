import { useCallback } from 'react';
import { useHistory } from 'react-router';

import { VscSignOut } from 'react-icons/vsc';

import { useAuth } from '../../hooks/auth';

import * as S from './styles';

import logoImg from '../../assets/logo.png';

const Header = () => {
  const { user, signOut } = useAuth();

  const history = useHistory();

  const handleSignOut = useCallback(() => {
    signOut();
    history.push('/');
  }, [history, signOut]);
  return (
    <S.Wrapper>
      <img src={logoImg} alt="Imagem do logo" />

      <div>
        <h4>Seja bem-vindo,</h4>
        <h3>{user.name}</h3>
      </div>

      <button onClick={handleSignOut}>
        <VscSignOut size={30} color="#666360" />
      </button>
    </S.Wrapper>
  );
};

export default Header;
