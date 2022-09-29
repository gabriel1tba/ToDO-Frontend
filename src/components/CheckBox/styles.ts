import styled, { css } from 'styled-components';

import { ICheckBox } from '.';

export const Wrapper = styled.input<ICheckBox>`
  ${({ border, theme }) => css`
    width: 20px;
    height: 20px;
    border-radius: ${border === 'round' ? '50%' : '0'};
    appearance: none;
    border: solid 2px ${theme.colors.info.main};

    &:checked {
      background-color: ${theme.colors.info.main};
      padding-top: 1px;
      padding-left: 4px;

      &:after {
        content: '';
        display: block;

        height: 9px;
        width: 4.5px;

        border: solid ${theme.colors.background};
        border-width: 0 2px 2px 0;

        transform: rotate(45deg);
      }
    }
  `}
`;
