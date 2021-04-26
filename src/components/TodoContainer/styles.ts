import styled from 'styled-components';

export const Wrapper = styled.div`
  width: calc(100vw - 250px);
  height: 490px;

  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 0;

  > p {
    display: block;
    margin: 10px 40px 10px;
    font-family: inherit;
    font-size: 18px;
    line-height: 1.2;
    color: #666360;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 180px;
    height: 38px;

    font-weight: 500;
    font-size: 17px;

    margin: 4px 0 0 30 px;

    color: #3498db;
    background-color: transparent;

    border: 0;
    border-radius: 50px;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }

    > svg {
      margin-right: 18px;
    }
  }
`;

export const TodoWrapper = styled.ul`
  height: 450px;
  overflow: scroll;

  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b8b1b1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;

    margin: 15px 0 0;
  }
`;
