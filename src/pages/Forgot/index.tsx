import { useHistory } from 'react-router';

import Header from 'components/Header';

import forgotImg from 'assets/underConstruction.jpg';

const Forgot = () => {
  const history = useHistory();

  const handleSignOut = () => {
    history.push('/');
  };

  return (
    <>
      <Header handleSignOut={handleSignOut} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <img src={forgotImg} alt="Aviso de que a pagina esta em construção" />
      </div>
    </>
  );
};

export default Forgot;
