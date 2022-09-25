import styled, { css } from 'styled-components';

interface WrapperButton {
  size: 'large' | 'normal';
  color: 'primary' | 'info' | 'warning' | 'danger' | 'success' | 'outline';
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

  info: () => css`
    background: ${({ theme }) => theme.colors.info.main};

    :hover {
      background: ${({ theme }) => theme.colors.info.light};
    }
    :active {
      background: ${({ theme }) => theme.colors.info.dark};
    }
    :disabled {
      background: ${({ theme }) => theme.colors.info.dark};
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

  outline: () => css`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[500]};
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
  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.2s ease-in;

  svg {
    margin-left: 0.25rem;
  }

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
