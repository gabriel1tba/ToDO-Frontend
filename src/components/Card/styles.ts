import styled, { css, DefaultTheme } from 'styled-components';

interface ContainerProps {
  color: 'info' | 'danger';
}

const colorModifiers = {
  info: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.gray[200]};
    color: ${theme.colors.gray[300]};
  `,
  danger: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.danger.light};
    color: ${theme.colors.danger.main};
  `,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  border-radius: 8px;
  padding: 5rem 3rem;

  svg {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  strong {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  ${({ theme, color }) => colorModifiers[color](theme)};
`;
