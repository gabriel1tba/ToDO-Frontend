import styled, { css } from 'styled-components';

import { IBadge } from '.';

export const Wrapper = styled.span<Omit<IBadge, 'title'>>`
  ${({ color, background }) => css`
    cursor: default;

    display: inline-block;
    border-radius: 10px;
    text-align: start;
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    height: 25px;
    color: ${color};
    background: ${background};

    padding: 0.3rem 0.6rem 0.1rem;
  `}
`;
