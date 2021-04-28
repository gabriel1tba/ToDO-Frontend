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
  margin: -25px 1px;

  animation: ${animationFromAbove} 0.7s;

  label {
    display: block;
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-top: 20px;
    font-size: inherit;
    line-height: 1.5;

    color: #343a40;
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
  }
`;

export const Footer = styled.footer`
  position: relative;
  margin-top: 10px;

  display: flex;
  justify-content: flex-end;
  &:before {
    content: '';
    position: absolute;
    right: -22px;
    bottom: 55px;
    width: 550px;
    border-top: 1px solid #ced4da;
  }
  button {
    display: flex;
    align-items: center;

    height: 40px;

    margin-top: 30px;
    padding: 0.375rem 0.7rem;

    color: #fff;
    font-size: 1rem;
    line-height: 18px;
    font-weight: 400;

    border: 1px solid transparent;
    border-radius: 0.25rem;

    transition: filter 0.3s;

    svg {
      margin-left: 1px;
      margin-right: 4px;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 !important;

  div {
    margin-bottom: -20px;
    padding: 0 !important;
  }
`;
