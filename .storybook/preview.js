import { ThemeProvider } from 'styled-components';

import { ToastProvider } from '../src/context/toast';

import theme from '../src/styles/themes/light';
import GlobalStyles from '../src/styles/global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <GlobalStyles />
        <Story />
      </ToastProvider>
    </ThemeProvider>
  ),
];
