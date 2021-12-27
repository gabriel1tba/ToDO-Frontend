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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodoWrapper = styled.div<IStyled>`
  display: flex;
  flex-direction: column;
  align-items: center;

  #header {
    animation: ${animationFromLeft} 1s;

    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    width: ${({ hastodos }) => (hastodos ? '100%' : '788px')};

    p {
      display: block;
      margin: 5px 45px
        ${({ hastodos }) => (hastodos ? '20px 8px' : '25px 45px')};
      font-family: inherit;
      font-size: 18px;
      line-height: 1.2;
      color: #666360;
    }

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
    }
  }

  #badges {
    span {
      margin-left: 10px;
    }
  }
`;

export const TodosList = styled.ul<IStyled>`
  animation: ${animationFromRight} 1s;

  width: ${({ hastodos }) => (hastodos ? '100%' : '710px')};

  > button {
    display: flex;
    align-items: center;
    align-self: flex-start;

    width: 260px;
    height: 38px;

    font-weight: 500;
    font-size: 17px;

    margin-top: 10px;

    color: #3498db;
    background-color: transparent;

    border: 0;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }

    > svg {
      margin-right: 10px;
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  animation: ${animationFromAbove} 0.7s;

  span {
    color: #bcbcbc;
    margin-left: 16px;
    word-break: break-word;
  }
`;
