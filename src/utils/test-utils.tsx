import { render, RenderOptions } from '@testing-library/react';

import AppProvider from 'context';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/themes/light';

interface IWrapperProvider {
  children: React.ReactNode;
}

// Adiciona os Providers ao método de render
const WrapperProvider = ({ children }: IWrapperProvider) => (
  <AppProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </AppProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(<WrapperProvider>{ui}</WrapperProvider>, { ...options });

export * from '@testing-library/react';
export { customRender as render };
