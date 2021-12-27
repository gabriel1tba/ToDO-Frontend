import { useHistory } from 'react-router';

import Header from 'components/Header';

import constructionImage from 'assets/underConstruction.jpg';

const Forgot = () => {
  const history = useHistory();

  const handleSignOut = () => {
    history.push('/');
  };

  return (
    <>
      <Header onSignOut={handleSignOut} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <img
          src={constructionImage}
          alt="Exibe um rato com equipamento de proteção e ferramentas de construção"
        />
      </div>
    </>
  );
};

export default Forgot;
