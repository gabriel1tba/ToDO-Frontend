import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 90px;
  padding: 0 3rem;

  /* background: #fafafa; */

  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);

  > img {
    transform: scale(0.8);
  }

  > div {
    margin-right: 890px;

    > h3 {
      color: #ff9000;
    }
  }
  > button {
    background: none;
    border: none;

    transition: transform 0.4s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
