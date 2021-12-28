import styled, { css } from 'styled-components';

interface WrapperButton {
  size: 'large' | 'normal';
  color: 'primary' | 'warning' | 'danger' | 'orange';
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
  `,
  warning: () => css`
    background: ${({ theme }) => theme.colors.warning.main};

    :hover {
      background: ${({ theme }) => theme.colors.warning.light};
    }
    :active {
      background: ${({ theme }) => theme.colors.warning.dark};
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
  `,

  orange: () => css`
    background: ${({ theme }) => theme.colors.orange.main};

    :hover {
      background: ${({ theme }) => theme.colors.orange.light};
    }
    :active {
      background: ${({ theme }) => theme.colors.orange.dark};
    }
  `,
};

const sizeModifiers = {
  normal: () => css`
    display: flex;
    align-items: center;
    height: 38px;
    margin-top: 30px;
    padding: 0.375rem 0.7rem;
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

  :disabled {
    background: #cccccc;
    cursor: default;
  }
`;

export const WrapperLoading = styled.div<Omit<WrapperButton, 'color'>>`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-bottom: ${({ size }) => (size === 'normal' ? '-6px' : '0px')};
    margin-right: 5px;
  }
`;
