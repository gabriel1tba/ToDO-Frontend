import styled, { css } from 'styled-components';

interface WrapperProps {
  isCompleted: boolean;
}

export const Wrapper = styled.li<WrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.375rem;

  width: 100%;
  gap: 0.75rem;
  padding: 0 1rem;
  background: #fefefe;

  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;

  > button {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    gap: 0.75rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      width: 100%;
      text-align: initial;
    }

    input[type='checkbox'] {
      cursor: pointer;
    }
  }

  div {
    display: flex;

    button {
      background: transparent;
      border: none;
      width: 1.3;
      height: 1.3rem;

      svg {
        flex: none;
        color: #808080;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
    }
  }

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      opacity: 0.5;
    `}
`;
