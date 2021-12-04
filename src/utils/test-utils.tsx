import { render, RenderOptions } from '@testing-library/react';

import AppProvider from 'context';

interface IWrapperProvider {
  children: React.ReactNode;
}

// Adiciona os Providers ao método de render
const WrapperProvider = ({ children }: IWrapperProvider) => (
  <AppProvider>{children}</AppProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(<WrapperProvider>{ui}</WrapperProvider>, { ...options });

export * from '@testing-library/react';
export { customRender as render };
