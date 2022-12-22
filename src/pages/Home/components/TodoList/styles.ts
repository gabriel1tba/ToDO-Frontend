import styled from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  max-width: 1032px;
  padding: 0 2rem;
  margin: 4rem auto;

  > section {
    display: flex;
    align-items: center;

    gap: 0.5rem;

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
  }

  .flex {
    display: flex;
  }
`;

export const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;
