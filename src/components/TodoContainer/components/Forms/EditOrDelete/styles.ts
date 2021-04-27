import styled from 'styled-components';

import { animationFromAbove } from '../../../styles';

interface IButton {
  color: string;
}

export const Wrapper = styled.div`
  margin: -25px 1px;

  animation: ${animationFromAbove} 0.8s;

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
    input {
      height: 13px;
      color: rgba(0, 0, 0, 0.7);
      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
      }
    }

    textarea {
      color: rgba(0, 0, 0, 0.7);
      font-size: 15px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
        font-size: 15px;
      }
    }
  }
`;

export const Footer = styled.footer<IButton>`
  position: relative;
  margin-top: 10px;

  &:before {
    content: '';
    position: absolute;
    right: -22px;
    bottom: 55px;
    width: 500px;
    border-top: 1px solid #ced4da;
  }
  button {
    color: #fff;
    background-color: ${({ color }) => color};

    margin-top: 30px;
    margin-left: 305px;

    width: 150px;

    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    height: 40px;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }

    > div {
      transform: scale(0.8);
      height: 25px;
      margin-top: -13px;
      margin-bottom: 15px;
    }
  }
`;
