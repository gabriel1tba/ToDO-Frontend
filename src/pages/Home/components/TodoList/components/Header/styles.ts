import styled from 'styled-components';

export const Wrapper = styled.div`
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
