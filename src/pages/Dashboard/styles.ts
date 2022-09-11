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

  margin: 50px 0;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;
