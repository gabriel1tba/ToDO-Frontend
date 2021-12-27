import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Content = styled.main`
  display: flex;

  margin-top: 80px;

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
