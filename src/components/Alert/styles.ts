import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

interface IAlert {
  isLeaving: boolean;
}

export const Overlay = styled.div<IAlert>`
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
      animation: ${fadeOut} 0.2s forwards;
    `}
`;

export const Wrapper = styled.div<IAlert>`
  ${({ theme, isLeaving }) => css`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 1.5rem;
    width: 27rem;
    background: ${theme.colors.background};
    border-radius: 8px;
    color: ${theme.colors.gray[500]};

    animation: ${scaleIn} 0.3s;

    ${isLeaving &&
    css`
      animation: ${scaleOut} 0.2s forwards;
    `}

    h1 {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 700;
      text-align: center;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
      max-width: 240px;
      text-align: center;
    }

    div {
      display: flex;
      gap: 1rem;
    }
  `}
`;
