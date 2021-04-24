import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 25px 18px;

  > input[type='checkbox'] {
    transform: scale(1.5);
    margin-left: 4px;
  }

  > a {
    cursor: pointer;
    align-self: flex-start;

    width: 400px;
  }

  > div {
    margin-right: -8px;

    svg {
      cursor: pointer;
      margin-left: 7px;

      transition: transform 0.3s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
