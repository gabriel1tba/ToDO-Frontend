import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 40px;

  width: 700px;
  height: 500px;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 40px;

  height: 50px;

  cursor: default;

  background-color: #fdfdfd;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);

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
