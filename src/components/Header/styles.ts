import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100vw;
  height: 120px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;

  max-width: 1032px;
  padding: 0 2rem;

  div:first-child {
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      h3 {
        color: ${({ theme }) => theme.colors.primary.main};
      }

      @media (max-width: 540px) {
        h3,
        h4 {
          display: none;
        }
      }
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    > button {
      background: none;
      border: none;

      svg {
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;
