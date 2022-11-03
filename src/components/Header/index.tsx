import { RiShutDownLine } from 'react-icons/ri';

import { useAuthContext } from 'hooks';

import logoImg from 'assets/logo.png';

import * as S from './styles';

export interface IHeader {
  userName?: string;
}

const Header = ({ userName }: IHeader) => {
  const { signOut } = useAuthContext();

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
          <button onClick={signOut} data-testid="sign-out">
            <RiShutDownLine size={40} />
          </button>
        </div>
      </S.HeaderContent>
    </S.Wrapper>
  );
};

export default Header;
