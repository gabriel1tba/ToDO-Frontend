import styled from 'styled-components';

export const Wrapper = styled.div`
  label {
    display: block;
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-top: 20px;
    font-size: inherit;
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.gray[500]};
  }

  > div {
    border-radius: 0.25rem;
    padding: 6px;

    input {
      height: 28px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
      }
    }

    textarea {
      color: rgba(0, 0, 0, 0.7);
      font-size: 16px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
        font-size: 15px;
      }
    }

    svg {
      margin-top: -10px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-top: 1.5rem;
  }
`;
