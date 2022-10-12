import styled, { css, DefaultTheme } from 'styled-components';

interface WrapperButton {
  size: 'large' | 'normal';
  variant: 'primary' | 'info' | 'warning' | 'danger' | 'success' | 'outline';
}

const colorModifiers = {
  primary: ({ colors }: DefaultTheme) => css`
    background: ${colors.primary.main};

    :hover {
      background: ${colors.primary.light};
    }
    :active {
      background: ${colors.primary.dark};
    }
    :disabled {
      background: ${colors.primary.dark};
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,

  info: ({ colors }: DefaultTheme) => css`
    background: ${colors.info.main};

    :hover {
      background: ${colors.info.light};
    }
    :active {
      background: ${colors.info.dark};
    }
    :disabled {
      background: ${colors.info.dark};
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,

  warning: ({ colors }: DefaultTheme) => css`
    background: ${colors.warning.main};

    :hover {
      background: ${colors.warning.light};
    }
    :active {
      background: ${colors.warning.dark};
    }
    :disabled {
      background: ${colors.warning.dark};
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,

  success: ({ colors }: DefaultTheme) => css`
    background: ${colors.success.main};

    :hover {
      background: ${colors.success.light};
    }
    :active {
      background: ${colors.success.dark};
    }
    :disabled {
      background: ${colors.success.dark};
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,

  danger: ({ colors }: DefaultTheme) => css`
    background: ${colors.danger.main};

    :hover {
      background: ${colors.danger.light};
    }
    :active {
      background: ${colors.danger.dark};
    }
    :disabled {
      background: ${colors.danger.dark};
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,

  outline: ({ colors }: DefaultTheme) => css`
    background: transparent;
    border: 1px solid ${colors.gray[200]};
    color: ${colors.gray[500]};

    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
};

const sizeModifiers = {
  normal: () => css`
    height: 38px;
    padding: 0.375rem 1rem;
    color: #fff;
    font-size: 1rem;
    line-height: 18px;
    font-weight: 400;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  `,

  large: () => css`
    color: #fff;
    height: 52px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    width: 100%;
    font-weight: 500;

    font-size: 18px;
  `,
};

export const Wrapper = styled.button<WrapperButton>`
  ${({ theme, variant, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 0.2s ease-in;

    svg {
      margin-left: 0.25rem;
    }

    ${sizeModifiers[size]()};

    ${colorModifiers[variant](theme)};
  `}
`;

export const WrapperLoading = styled.div<Omit<WrapperButton, 'variant'>>`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    margin-left: ${({ size }) => (size === 'large' ? '24px' : '12px')};
  }
`;
