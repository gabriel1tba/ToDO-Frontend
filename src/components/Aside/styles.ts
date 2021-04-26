import styled from 'styled-components';

export const Wrapper = styled.aside`
  height: calc(100vh - 92px);
  width: 250px;

  border: solid 1px rgba(0, 0, 0, 0.2);
  border-top: 0;

  margin-top: 2px;

  align-self: flex-start;

  > div {
    margin: 140px 35px 30px;
  }
`;

export const InputSearch = styled.input`
  margin: 48px 35px 0;

  padding: 8px;
  width: 180px;
  height: 35px;
  color: #666360;

  border-radius: 5px;
  background: transparent;

  border: solid 1px rgba(0, 0, 0, 0.2);

  color: rgba(0, 0, 0, 0.5);

  font-size: 15px;

  svg {
    margin-right: 16px;
  }

  transition: all 0.3s;

  &:focus {
    width: 95%;
    margin: 48px 6px 0;

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
