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

  > input[type='checkbox'] {
    width: 17px;
    height: 17px;
    margin: 5px;
    appearance: none;
    box-shadow: none;
    font-size: 2em;
    border: solid 2px ${({ theme }) => theme.colors.success.main};

    &:checked {
      background-color: ${({ theme }) => theme.colors.success.main};

      display: inline-block;

      padding-top: -2px;
      padding-left: 3px;
      &:after {
        content: '';
        display: block;

        width: 4.5px;
        height: 9px;

        border: solid ${({ theme }) => theme.colors.background};
        border-width: 0 2px 2px 0;

        transform: rotate(45deg);
      }
    }
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

        transition: transform 0.3s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;
