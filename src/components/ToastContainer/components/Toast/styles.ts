import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface WrapperProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: number;
}

const toastTypes = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Wrapper = styled(animated.div)<WrapperProps>`
  ${({ hasdescription, type }) => css`
    width: 320px;

    position: fixed;
    margin-right: 10px;
    padding: 16px 30px 16px 16px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;

    @media (max-width: 375px) {
      width: 280px;
      padding: 14px 26px 14px 14px;
    }

    ${toastTypes[type || 'info']}
    > svg {
      margin: 4px 12px 0 0;
    }
    div {
      flex: 1;
      p {
        margin-top: 4px;
        font-size: 14px;
        opacity: 0.8;
        line-height: 20px;
      }
    }
    button {
      cursor: pointer;

      position: absolute;
      right: 16px;
      top: 19px;
      opacity: 0.6;
      border: 0;
      background: transparent;
      color: inherit;
    }
    ${hasdescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
  `}
`;
