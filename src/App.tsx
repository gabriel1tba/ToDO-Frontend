import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppProvider from './context';
import Routes from './routes';

import { GlobalStyles } from './styles/global';

import light from 'styles/themes/light';

const App = () => {
  return (
    <Router>
      <AppProvider>
        <ThemeProvider theme={light}>
          <Routes />
          <GlobalStyles />
        </ThemeProvider>
      </AppProvider>
    </Router>
  );
};

export default App;
