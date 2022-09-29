import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    span {
      width: 160px;
      background: ${theme.colors.primary.main};
      padding: 8px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.4s;

      position: absolute;
      bottom: calc(100% + 6px);
      left: 50%;
      transform: translateX(-50%);
      color: ${theme.colors.gray[500]};

      &::before {
        content: '';
        border-style: solid;
        border-color: ${theme.colors.primary.main};
        border-width: 6px 6px 0 6px;
        top: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &:hover span {
      opacity: 1;
      visibility: visible;
    }
  `}
`;
