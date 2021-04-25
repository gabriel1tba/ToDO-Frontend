import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 20px;

  margin: 0 40px 20px;

  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  > input[type='checkbox'] {
    transform: scale(1.5);
    margin-left: 5px;
  }

  > a {
    cursor: pointer;
    width: calc(100vw - 450px);
  }

  > div {
    margin-right: 1px;

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
