import styled from 'styled-components';

export const Wrapper = styled.div`
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
