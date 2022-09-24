import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: fit-content;
  margin: 15px 5px -5px;
  padding-bottom: 14px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 1px;
    bottom: 5px;
    width: 100%;
    border: 0.5px solid rgba(0, 0, 0, 0.125);
  }

  > a {
    cursor: pointer;
    width: calc(100vw - 860px);
  }

  > div {
    margin-left: 35px;
    button {
      background: transparent;
      border: none;
      svg {
        cursor: pointer;
        margin-left: 5px;
      }
    }
  }
`;
