import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

interface IOverlay {
  isLeaving: boolean;
}
export const Overlay = styled.div<IOverlay>`
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  animation: ${fadeIn} 0.3s;
  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${fadeOut} 0.2s;
    `}
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
