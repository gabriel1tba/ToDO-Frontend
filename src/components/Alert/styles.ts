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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 1.5rem;

    width: 432px;
    height: 238px;

    background: ${theme.colors.background};
    border-radius: 8px;

    color: ${theme.colors.gray[500]};

    h1 {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 700;
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
