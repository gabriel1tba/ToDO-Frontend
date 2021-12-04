import styled, { css } from 'styled-components';

interface WrapperButton {
  size: 'large' | 'normal';
  background: string;
}

const wrapperModifiers = {
  normal: () => css`
    display: flex;
    align-items: center;
    height: 38px;
    margin-top: 30px;
    padding: 0.375rem 0.7rem;
    color: #fff;
    font-size: 1rem;
    line-height: 18px;
    font-weight: 400;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    svg {
      margin-left: -4px;
      margin-right: 4px;
    }
  `,

  large: () => css`
    color: #fff;
    height: 52px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;

    font-size: 18px;
  `,
};

export const Wrapper = styled.button<WrapperButton>`
  transition: filter 0.3s;

  ${({ size }) => wrapperModifiers[size]()};

  background: ${({ background }) => background};

  &:hover {
    filter: brightness(0.8);
  }
`;

export const WrapperLoading = styled.div<Omit<WrapperButton, 'background'>>`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-bottom: ${({ size }) => (size === 'normal' ? '-6px' : '0px')};
    margin-right: 5px;
  }
`;
