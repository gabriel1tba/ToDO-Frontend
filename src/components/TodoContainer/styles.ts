import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 40px;

  width: calc(100vw - 250px);
  height: 490px;

  border-radius: 5px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 160px;
    height: 38px;

    font-weight: 600;
    font-size: 17px;

    margin: 4px 0 0 190px;

    color: #fff;
    background-color: #3498db;

    border: 0;
    border-radius: 50px;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }

    > svg {
      margin-right: 10px;
    }
  }
`;

export const TodoWrapper = styled.div`
  height: 345px;
  overflow: scroll;

  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    margin: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b8b1b1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
  }
`;
