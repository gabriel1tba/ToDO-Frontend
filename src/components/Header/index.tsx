import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from 'hooks';

import logoImg from 'assets/logo.png';

import * as S from './styles';

export interface IHeader {
  userName?: string;
  onSignOut: () => void;
}

const Header = ({ userName }: IHeader) => {
  const { signOut } = useAuth();

  return (
    <S.Wrapper>
      <S.HeaderContent>
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
        <div>
          <button onClick={signOut}>
            <RiShutDownLine size={40} />
          </button>
        </div>
      </S.HeaderContent>
    </S.Wrapper>
  );
};

export default Header;
