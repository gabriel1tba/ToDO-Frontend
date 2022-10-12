import { render, RenderOptions } from '@testing-library/react';

import AppProvider from 'context';
import { ThemeProvider } from 'styled-components';

import defaultTheme from 'styles/themes/default';

interface IWrapperProvider {
  children: React.ReactNode;
}

// Adiciona os Providers ao método de render
const WrapperProvider = ({ children }: IWrapperProvider) => (
  <AppProvider>
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  </AppProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(<WrapperProvider>{ui}</WrapperProvider>, { ...options });

export * from '@testing-library/react';
export { customRender as render };
