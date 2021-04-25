import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 40px 20px;

  height: 38px;

  padding-bottom: 18px;

  border-bottom: solid 1px rgba(0, 0, 0, 0.2);

  > input[type='checkbox'] {
    transform: scale(1.5);
    margin-left: 5px;

    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;

    border: solid 1px #666360;
    cursor: pointer;

    appearance: none;

    &:checked {
      background-color: rgba(46, 204, 113, 0.7);
      border: solid 1px #2ecc71;
    }
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
