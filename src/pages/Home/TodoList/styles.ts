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

  input {
    height: 54px;
    width: 100%;
    padding: 1rem;

    border: 1px solid #0d0d0d;
    border-radius: 8px;

    font-size: 1.5rem;
  }

  button {
    font-size: 1rem;
    height: 54px;
    width: 160px;
    font-weight: 700;

    svg {
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;

    button {
      min-width: 100%;
      margin-top: 0.5rem;
    }
  }
`;

export const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const ListInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 3rem;

  @media (max-width: 576px) {
    margin-top: 1rem;
  }

  p {
    display: inline-block;
    margin-right: 0.5rem;
    font-weight: 700;
    line-height: 1rem;
  }

  div:first-child p {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  div:last-child p {
    color: #3172b7;
  }

  @media (max-width: 375px) {
    flex-direction: column;

    p + span {
      margin-top: 0.5rem;
    }
  }
`;
