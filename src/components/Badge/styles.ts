import styled from 'styled-components';

export const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 30px 40px 30px;

  cursor: default;

  > span {
    display: inline-block;

    margin: 10px 0;

    border-radius: 3rem;
    text-align: start;

    height: 25px;
    width: 180px;

    font-size: 14px;
    font-weight: 500;
    padding: 0.3rem 0.8rem 0.1rem;
    line-height: inherit;
  }
`;
