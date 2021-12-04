import { render, RenderOptions } from '@testing-library/react';
import { TodoProvider } from 'context/todos';

interface IWrapperProvider {
  children: React.ReactNode;
}

const WrapperProvider = ({ children }: IWrapperProvider) => (
  <TodoProvider>{children}</TodoProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(<WrapperProvider>{ui}</WrapperProvider>, { ...options });

export * from '@testing-library/react';
export { customRender as render };
