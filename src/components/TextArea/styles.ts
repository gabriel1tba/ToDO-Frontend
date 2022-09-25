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
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  padding: 8px;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray[500]};

  & + div {
    margin-top: 8px;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.danger.main};
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: ${({ theme }) => theme.colors.primary.main};
      border-color: ${({ theme }) => theme.colors.primary.main};
    `}

    ${({ isFocused }) =>
    isFocused &&
    css`
      color: ${({ theme }) => theme.colors.primary.main};
      border-color: ${({ theme }) => theme.colors.primary.main};
    `}

  textarea {
    flex: 1;
    border: 0;
    background: transparent;
    font-size: 16px;

    resize: none;

    color: #202124;
    box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.background} inset;

    &:-webkit-autofill {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.primary.main};
    }

    &::placeholder {
      color: #202124;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  span {
    background: ${({ theme }) => theme.colors.danger.main};
    color: ${({ theme }) => theme.colors.background};
    font-size: 16px;

    &::before {
      border-color: ${({ theme }) => theme.colors.danger.main} transparent;
    }
  }
`;
