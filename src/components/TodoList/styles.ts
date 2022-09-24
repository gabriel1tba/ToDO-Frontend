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

export const NoTaskWarning = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1rem 0;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  padding: 5rem 3rem;

  svg {
    font-size: 4rem;
    fill: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: 1rem;
  }

  strong {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  p {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
