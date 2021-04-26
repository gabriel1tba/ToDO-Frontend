import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 90px;
  padding: 0 8rem;

  position: relative;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);

  > img {
    margin-left: -40px;
    transform: scale(0.8);
  }

  > div {
    position: absolute;
    left: 310px;

    > h3 {
      color: #ff9000;
    }
  }
  > button {
    background: none;
    border: none;

    margin-left: 30px;

    transition: transform 0.4s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const InputSearch = styled.input`
  width: 180px;
  height: 35px;

  color: #666360;

  border-radius: 5px;
  background: transparent;

  border: solid 1px rgba(0, 0, 0, 0.2);

  color: rgba(0, 0, 0, 0.5);

  font-size: 15px;

  padding: 8px;
  margin-left: 660px;

  transition: all 0.4s;

  &:focus {
    width: 280px;

    margin-left: 560px;

    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
  }
`;
