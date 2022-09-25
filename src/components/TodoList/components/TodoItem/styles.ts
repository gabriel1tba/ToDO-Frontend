import styled, { css } from 'styled-components';

interface WrapperProps {
  isCompleted: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  padding: 1rem;
  gap: 12px;
  background: #fefefe;

  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;

  p {
    width: 100%;
    text-align: initial;
  }

  input[type='checkbox'] {
    cursor: pointer;
  }

  div {
    display: flex;

    svg {
      font-size: 1.3rem;
      color: #808080;
      cursor: pointer;
    }
  }

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
      color: #ccc;
    `}
`;
