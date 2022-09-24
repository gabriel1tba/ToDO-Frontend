import styled, { css } from 'styled-components';

interface WrapperButton {
  size: 'large' | 'normal';
  color: 'primary' | 'blue' | 'warning' | 'danger' | 'success';
}

const colorModifiers = {
  primary: () => css`
    background: ${({ theme }) => theme.colors.primary.main};

    :hover {
      background: ${({ theme }) => theme.colors.primary.light};
    }
    :active {
      background: ${({ theme }) => theme.colors.primary.dark};
    }
    :disabled {
      background: ${({ theme }) => theme.colors.primary.dark};
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,

  blue: () => css`
    background: ${({ theme }) => theme.colors.blue.main};

    :hover {
      background: ${({ theme }) => theme.colors.blue.light};
    }
    :active {
      background: ${({ theme }) => theme.colors.blue.dark};
    }
    :disabled {
      background: ${({ theme }) => theme.colors.blue.dark};
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,

  warning: () => css`
    background: ${({ theme }) => theme.colors.warning.main};

    :hover {
      background: ${({ theme }) => theme.colors.warning.light};
    }
    :active {
      background: ${({ theme }) => theme.colors.warning.dark};
    }
    :disabled {
      background: ${({ theme }) => theme.colors.warning.dark};
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,

  success: () => css`
    background: ${({ theme }) => theme.colors.success.main};

    :hover {
      background: ${({ theme }) => theme.colors.success.light};
    }
    :active {
      background: ${({ theme }) => theme.colors.success.dark};
    }
    :disabled {
      background: ${({ theme }) => theme.colors.success.dark};
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,

  danger: () => css`
    background: ${({ theme }) => theme.colors.danger.main};

    :hover {
      background: ${({ theme }) => theme.colors.danger.light};
    }
    :active {
      background: ${({ theme }) => theme.colors.danger.dark};
    }
    :disabled {
      background: ${({ theme }) => theme.colors.danger.dark};
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
};

const sizeModifiers = {
  normal: () => css`
    display: flex;
    align-items: center;
    height: 38px;
    margin-top: 30px;
    padding: 0.375rem 1rem;
    color: #fff;
    font-size: 1rem;
    line-height: 18px;
    font-weight: 400;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    svg {
      margin-left: -4px;
      margin-right: 4px;
    }
  `,

  large: () => css`
    color: #fff;
    height: 52px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;

    font-size: 18px;
  `,
};

export const Wrapper = styled.button<WrapperButton>`
  transition: background 0.2s ease-in;

  ${({ size }) => sizeModifiers[size]()};

  ${({ color }) => colorModifiers[color]()};
`;

export const WrapperLoading = styled.div<Omit<WrapperButton, 'color'>>`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    margin-left: ${({ size }) => (size === 'large' ? '24px' : '12px')};
  }
`;
