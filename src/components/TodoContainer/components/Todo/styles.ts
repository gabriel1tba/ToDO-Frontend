import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 15px 40px -5px;

  padding-bottom: 15px;

  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(100vw - 765px);
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  > input[type='checkbox'] {
    transform: scale(1.5);
    margin-right: 20px;

    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;

    border: solid 1px #666360;
    cursor: pointer;

    appearance: none;

    &:checked {
      background-color: rgba(46, 204, 113, 0.2);
      border: solid 1px #2ecc71;
    }
  }

  > a {
    cursor: pointer;
    width: calc(100vw - 860px);
  }

  > div {
    margin-right: 350px;

    svg {
      cursor: pointer;
      margin-left: 5px;

      transition: transform 0.3s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
