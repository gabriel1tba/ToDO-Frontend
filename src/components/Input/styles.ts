import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export interface IWrapper {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  ${({ theme, isFocused, isFilled, hasError }) => css`
    display: flex;
    align-items: center;

    background: ${theme.colors.background};
    border-radius: 10px;
    border: 1px solid ${theme.colors.gray[500]};
    padding: 12px;
    width: 100%;
    color: ${theme.colors.gray[500]};

    & + div {
      margin-top: 10px;
    }

    ${hasError &&
    css`
      border-color: ${theme.colors.danger.main};
      > svg {
        stroke: ${theme.colors.danger.main};
      }
    `}

    ${isFilled &&
    css`
      color: ${theme.colors.primary.main};
      border-color: ${theme.colors.primary.main};
    `}

    ${isFocused &&
    css`
      color: ${theme.colors.primary.main};
      border-color: ${theme.colors.primary.main};
      > svg {
        stroke: ${theme.colors.primary.main};
      }
    `}

  input {
      flex: 1;
      border: 0;
      background: transparent;
      font-size: 1rem;

      color: #202124;
      box-shadow: 0 0 0 30px ${theme.colors.background} inset;

      &:-webkit-autofill {
        -webkit-text-fill-color: ${theme.colors.primary.main};
      }

      &::placeholder {
        color: #202124;
      }
    }

    svg {
      margin-right: 1rem;
    }
  `}
`;

export const Error = styled(Tooltip)`
  ${({ theme }) => css`
    height: 20px;
    margin-left: 16px;

    > svg {
      margin: 0;
    }

    span {
      background: ${theme.colors.danger.main};
      color: ${theme.colors.background};
      font-size: 15px;

      &::before {
        border-color: ${theme.colors.danger.main} transparent;
      }
    }
  `}
`;
