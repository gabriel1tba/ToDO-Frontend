import styled, { keyframes } from 'styled-components';

export const animationFromAbove = keyframes`
  from{
    opacity: 0;
    transform: translateY(-20px);
  }

  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  animation: ${animationFromAbove} 0.7s;

  label {
    display: block;
    margin-top: 20px;
    margin-bottom: 0.5rem;
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  div {
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

export const Footer = styled.footer`
  position: relative;
  margin-top: 10px;

  button {
    font-weight: 700;
  }

  display: flex;
  justify-content: flex-end;
  &:before {
    content: '';
    position: absolute;
    right: -21px;
    bottom: 55px;
    width: 550px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 !important;

  strong {
    font-size: 13px;
  }

  small {
    font-size: 11px;
  }

  div {
    margin-bottom: -20px;
    padding: 0 !important;
  }
`;
