import styled, { keyframes } from 'styled-components';

interface IButton {
  hastodos: boolean;
}

const animationFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(60px);
  }

  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

const animationFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-60px);
  }

  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  width: calc(100vw - 330px);

  display: flex;
  flex-direction: column;

  margin: 40px 0 0 330px;

  > div {
    animation: ${animationFromLeft} 1s;

    display: flex;
    justify-content: space-between;
    margin-bottom: 23px;

    > p {
      display: block;
      margin: 5px 45px 10px;
      font-family: inherit;
      font-size: 18px;
      line-height: 1.2;
      color: #666360;
    }

    > div {
      margin-right: 380px;
    }
  }
`;

export const TodoWrapper = styled.ul<IButton>`
  animation: ${animationFromRight} 1s;

  height: calc(100vh - 235px);
  overflow: scroll;

  overflow-x: hidden;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 260px;
    height: 38px;

    font-weight: 500;
    font-size: 17px;

    margin: 10px 0 0 ${({ hastodos }) => (hastodos ? '-16px' : '30px')};

    color: #3498db;
    background-color: transparent;

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
    margin-left: 50px;
  }
`;
