import styled, { keyframes } from 'styled-components';

interface IStyled {
  hastodos: boolean;
}

const animationFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(20px);
  }

  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

const animationFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-20px);
  }

  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const animationFromAbove = keyframes`
  from{
    opacity: 0;
    transform: translateY(-20px);
  }

  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div<IStyled>`
  width: calc(100vw - 390px);

  display: flex;
  flex-direction: column;

  > div {
    animation: ${animationFromLeft} 1s;

    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    > p {
      display: block;
      margin: 5px 45px
        ${({ hastodos }) => (hastodos ? '20px 8px' : '25px 45px')};
      font-family: inherit;
      font-size: 18px;
      line-height: 1.2;
      color: #666360;
    }

    > div {
      margin-right: 345px;
    }
  }
`;

export const TodoWrapper = styled.ul<IStyled>`
  animation: ${animationFromRight} 1s;

  height: calc(100vh -80px);
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

    margin: 10px 0 0 ${({ hastodos }) => (hastodos ? '-45px' : '37px')};

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

export const SearchNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 350px 0 0;

  animation: ${animationFromAbove} 0.7s;

  svg {
    margin-bottom: 16px;
  }

  span {
    color: #bcbcbc;
    margin-left: 24px;
    word-break: break-word;
  }
`;
