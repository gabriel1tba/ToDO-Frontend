import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 40px;

  width: 550px;
  height: 490px;

  border: solid 1px rgba(0, 0, 0, 0.2);

  border-radius: 5px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 180px;
    height: 45px;

    font-weight: 600;
    font-size: 18px;

    margin: 9px 0 0 180px;

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

export const Header = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 15px;

  height: 50px;

  cursor: default;

  background-color: #fff;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);

  > span {
    display: inline-block;

    border-radius: 3rem;
    text-align: center;

    font-size: 16px;
    font-weight: 500;
    padding: 0.05rem 0.8rem 0.1rem;
    line-height: inherit;
  }
`;

export const InputSearch = styled.input`
  margin: 18px;

  background: #ffffff;
  padding: 8px;
  width: 95%;
  color: #666360;

  border: 0;
  background: transparent;

  border: solid 1px rgba(0, 0, 0, 0.2);

  color: rgba(0, 0, 0, 0.5);

  font-size: 15px;

  svg {
    margin-right: 16px;
  }

  &:focus {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
  }
`;

export const TodoWrapper = styled.div`
  height: 335px;
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
