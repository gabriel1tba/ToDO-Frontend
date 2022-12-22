import styled, { css, DefaultTheme } from 'styled-components';

interface WrapperProps {
  color: 'info' | 'danger';
}

const colorModifiers = {
  info: ({ colors }: DefaultTheme) => css`
    border: 1px solid ${colors.gray[700]};
    color: ${colors.gray[300]};
  `,
  danger: ({ colors }: DefaultTheme) => css`
    border: 1px solid ${colors.danger.light};
    color: ${colors.danger.light};
  `,
};

export const Wrapper = styled.div<WrapperProps>`
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
