import { useCallback } from 'react';

import { VscSignOut } from 'react-icons/vsc';

import { useAuth } from '../../hooks/auth';

import * as S from './styles';

import logoImg from '../../assets/logo.png';

const Header = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);
  return (
    <S.Wrapper>
      <img src={logoImg} alt="Imagem com as letras da logo" />

      <div>
        <h4>Seja bem-vindo,</h4>
        <h3>{user.name}</h3>
      </div>

      <button onClick={handleSignOut}>
        <VscSignOut size={33} color="#666360" />
      </button>
    </S.Wrapper>
  );
};

export default Header;
