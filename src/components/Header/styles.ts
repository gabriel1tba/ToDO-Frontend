import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 90px;
  padding: 0 10rem;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);

  @media (max-width: 1024px) {
    padding: 0 8rem;
  }

  @media (max-width: 768px) {
    padding: 0 4rem;
  }

  @media (max-width: 540px) {
    padding: 0 1rem;
    height: 70px;
  }

  @media (max-width: 360px) {
    padding: 0 10px;
    height: 60px;
  }

  .logo-name-container {
    display: flex;
    > img {
      align-self: center;
      margin-left: -40px;
      transform: scale(0.8);
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      > h3 {
        color: ${({ theme }) => theme.colors.orange.main};
      }
    }

    @media (max-width: 768px) {
      h3 {
        font-size: 15px;
      }
      h4 {
        font-size: 13px;
      }
      img {
        transform: scale(0.5);
        margin-left: -50px;
      }
    }

    @media (max-width: 540px) {
      h3 {
        display: none;
      }
      h4 {
        display: none;
      }
      img {
        transform: scale(0.4);
      }
    }
  }

  .input-logout-container {
    display: flex;
    align-items: center;
    > button {
      background: none;
      border: none;

      svg {
        fill: ${({ theme }) => theme.colors.gray[500]};
      }

      transition: transform 0.4s;

      &:hover {
        transform: scale(1.2);
      }

      @media (max-width: 540px) {
        margin-left: 10px;
        margin-right: 10px;
      }

      @media (max-width: 360px) {
        padding: 0 10px;

        margin-left: 0;
        margin-right: 10px;
      }
    }
  }
`;

export const InputSearch = styled.input`
  width: 180px;
  height: 35px;

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-right: 30px;

  border-radius: 5px;
  background: transparent;

  border: solid 1px rgba(0, 0, 0, 0.2);

  color: rgba(0, 0, 0, 0.5);

  font-size: 15px;

  padding: 8px;

  transition: all 0.4s;

  &:focus {
    width: 280px;

    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
  }

  @media (max-width: 1024px) {
    margin-right: 30px;
  }

  @media (max-width: 768px) {
    margin-right: 30px;
  }

  @media (max-width: 441px) {
    width: 120px;
    margin-right: 20px;

    &:focus {
      width: 150px;
    }
  }

  @media (max-width: 360px) {
    width: 100px;
    margin-right: 5px;

    &:focus {
      width: 120px;
    }
  }
`;
