import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './context';
import Routes from './routes';

import { GlobalStyles } from './styles/global';

const App = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
        <GlobalStyles />
      </AppProvider>
    </Router>
  );
};

export default App;
