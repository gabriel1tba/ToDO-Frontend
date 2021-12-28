import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppProvider from './context';
import Routes from './routes';

import { GlobalStyles } from './styles/global';

import theme from 'styles/themes/light';

const App = () => {
  return (
    <Router>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyles />
        </ThemeProvider>
      </AppProvider>
    </Router>
  );
};

export default App;
