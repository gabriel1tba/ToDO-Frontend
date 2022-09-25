import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1032px;
  padding: 0 2rem;
  margin: 4rem auto;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  @media (max-width: 360px) {
    flex-direction: column;

    button {
      min-width: 100%;
    }
  }

  input {
    height: 54px;
    width: 100%;
    padding: 16px;

    border: 1px solid #0d0d0d;
    border-radius: 8px;

    font-size: 24px;
  }

  button {
    height: 54px;
    width: 160px;
    font-weight: 700;

    svg {
      font-size: 18px;
    }
  }
`;

export const ListInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 3rem;

  p {
    display: inline-block;
    margin-right: 0.5rem;
    font-weight: 700;
    line-height: 17px;
  }

  div:first-child p {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  div:last-child p {
    color: #3172b7;
  }
`;
