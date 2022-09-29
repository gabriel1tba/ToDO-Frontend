import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  padding: 1rem;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    z-index: 2;

    position: relative;
    text-align: flex;
    width: 600px;
    background: ${theme.colors.background};
    border-radius: 8px;
    header {
      margin: 15px 0;
      border-bottom: 1px solid ${theme.colors.gray[200]};

      > h1 {
        color: ${theme.colors.gray[700]};
        font-size: 1.5rem;

        margin: 0 0 15px 21px;

        cursor: default;
      }

      button {
        position: absolute;
        top: 15px;
        right: 20px;
        background: transparent;
        border: none;

        > svg {
          cursor: pointer;
          fill: ${theme.colors.gray[700]};
        }
      }
    }
  `}
`;

export const ModalWrapper = styled.div`
  margin: 20px;
`;
