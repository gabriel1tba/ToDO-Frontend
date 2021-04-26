import styled from 'styled-components';

interface IButton {
  color: string;
}

export const Wrapper = styled.div`
  margin: 0 20px;

  div {
    border-radius: 0.25rem;
    margin-bottom: 30px;
    > form {
      &:first-child {
        input {
          &::placeholder {
            font-size: 14px;
          }
        }
      }

      div {
        textarea {
          &::placeholder {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export const Button = styled.button<IButton>`
  color: #fff;
  background-color: ${({ color }) => color};

  margin-top: 10px;
  margin-left: 370px;

  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`;
