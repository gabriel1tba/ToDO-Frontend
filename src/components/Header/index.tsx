import { RiShutDownLine } from 'react-icons/ri';
import { useHistory } from 'react-router';

import * as S from './styles';

import logoImg from 'assets/logo.png';

import { IHeader } from './interfaces';

const Header = ({ userName, onSignOut }: IHeader) => {
  const history = useHistory();

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
          <button onClick={() => (userName ? onSignOut() : history.push('/'))}>
            <RiShutDownLine size={40} />
          </button>
        </div>
      </S.HeaderContent>
    </S.Wrapper>
  );
};

export default Header;
