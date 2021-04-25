import styled from 'styled-components';

export const Wrapper = styled.aside`
  height: calc(100vh - 92px);
  width: 250px;

  border: solid 1px rgba(0, 0, 0, 0.2);
  border-top: 0;

  margin-top: 2px;

  align-self: flex-start;
`;

export const InputSearch = styled.input`
  margin: 48px 40px 0;

  background: #ffffff;
  padding: 8px;
  width: 70%;
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
    margin: 40px 6px 0;

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

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 30px 40px 30px;

  cursor: default;

  > span {
    display: inline-block;

    margin: 10px 0;

    border-radius: 3rem;
    text-align: center;

    height: 25px;

    font-size: 14px;
    font-weight: 500;
    padding: 0.3rem 0.8rem 0.1rem;
    line-height: inherit;
  }
`;
