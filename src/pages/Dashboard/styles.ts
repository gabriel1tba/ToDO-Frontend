import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  display: flex;
  align-self: center;

  margin-top: 80px;
  margin-left: 340px;

  @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }

  @media (max-width: 540px) {
    margin-left: 0;
  }

  @media (max-width: 360px) {
    margin-left: 0;
  }
`;
