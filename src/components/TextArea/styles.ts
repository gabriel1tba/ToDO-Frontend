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

  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #666360;
  padding: 16px;
  width: 100%;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  textarea {
    flex: 1;
    border: 0;
    background: transparent;

    resize: none;

    color: #202124;
    box-shadow: 0 0 0 30px #ffffff inset;

    &:-webkit-autofill {
      -webkit-text-fill-color: #ff9000;
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
    background: #c53030;
    color: #fff;
    font-size: 16px;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
