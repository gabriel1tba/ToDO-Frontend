import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export interface IWrapper {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray.main};
  padding: 14px;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray.main};

  & + div {
    margin-top: 10px;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.danger.main};
      > svg {
        stroke: ${({ theme }) => theme.colors.danger.main};
      }
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: ${({ theme }) => theme.colors.orange.main};
      border-color: ${({ theme }) => theme.colors.orange.main};
      > svg {
        stroke: ${({ theme }) => theme.colors.orange.main};
      }
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: ${({ theme }) => theme.colors.orange.main};
      border-color: ${({ theme }) => theme.colors.orange.main};
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;

    color: #202124;
    box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.background} inset;

    &:-webkit-autofill {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.orange.main};
    }

    &::placeholder {
      color: #202124;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  > svg {
    margin: 0;
  }

  span {
    background: ${({ theme }) => theme.colors.danger.main};
    color: ${({ theme }) => theme.colors.background};
    font-size: 15px;

    &::before {
      border-color: ${({ theme }) => theme.colors.danger.main} transparent;
    }
  }
`;
