import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 90px;
  padding: 0 15rem;

  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);

  img {
    transform: scale(0.8);
  }

  > div {
    margin-right: 450px;

    > h3 {
      color: #ff9000;
    }
  }
  > button {
    background: none;
    border: none;
  }
`;
