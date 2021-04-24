import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 20px 18px;

  > input[type='checkbox'] {
    transform: scale(1.5);
    margin-left: 2px;
  }

  > a {
    padding-right: 350px;
    cursor: pointer;
  }

  > div {
    margin-right: -8px;
    transition: transform 0.4s;

    svg {
      margin-left: 5px;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
