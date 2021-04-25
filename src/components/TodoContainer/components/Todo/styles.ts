import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1px 40px 20px;

  > input[type='checkbox'] {
    transform: scale(1.5);
    margin-left: 4px;
  }

  > a {
    cursor: pointer;
    width: calc(100vw - 450px);
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
